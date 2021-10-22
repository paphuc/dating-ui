import React, { useState, useEffect, useCallback } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import ImagePicker from 'react-native-image-crop-picker'
import { RouteProp } from '@react-navigation/native'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import { ImessagesAPI } from '../../interfaces'
import { RootStackParamList } from '../../navigation/types'
import Config from '../../../config'
import Api from '../../common/Api'
import CloudinaryService from '../../common/Cloudinary'
import { default as ConversationAction } from '../../redux/actions/room'
import { useSelector, useDispatch } from 'react-redux'

import { Alert, Platform } from 'react-native'

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'ChatBoxScreen'>

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChatBoxScreen'
>

export type Props = {
  route: ProfileScreenRouteProp
  navigation: ProfileScreenNavigationProp
}

export default function Hook(props?: Props) {
  const userID = props?.route.params?.userID
  const roomID = props?.route.params?.room
  const userTarget = props?.route.params?.userTarget
  const [messages, setMessages] = useState<IMessage[]>([])
  const [page, setPage] = useState<number>(1)

  const websocket = new WebSocket(
    `${Config.WS}:${Config.Port}/ws?room=${roomID?._id}&user=${userID}`
  )
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {})()

    getLastMessage()
    var a = JSON.stringify({
      action: 'join-room',
      room_id: roomID?._id,
      sender_id: userID,
    })

    websocket.onopen = () => {
      sendSockets(a)
    }
  }, [page])

  const handlePickImage = async () => {
    let result = await ImagePicker.openPicker({
      cropping: true,
    })
    if (result) {
      const localUri = result.path
      const filename = localUri.split('/').pop()
      if (filename) {
        const dataPicture = JSON.parse(
          JSON.stringify({
            uri: localUri,
            name: filename,
            type: result.mime,
          })
        )
        const formData = new FormData()
        formData.append('file', dataPicture)

        const url = await CloudinaryService.updateImageCould(formData)
        var json = JSON.stringify({
          action: 'send-message',
          sender_id: userID,
          content: '',
          attachments: [url],
          created_at: new Date().toJSON(),
        })

        const mess = {
          _id: url,
          text: '',
          createdAt: new Date(new Date().toJSON()),
          image: url,
          user: {
            _id: 1,
            name: userTarget?.name,
            avatar: userTarget?.avatar,
          },
        }

        onChange(mess)
        sendSockets(json)
      }
    }
  }
  websocket.onmessage = (e) => {
    const messagesSocket = JSON.parse(e.data)
    if (messagesSocket.sender_id !== userID) {
      onChange(convertSocketMessToMessageList([messagesSocket]))
    }
  }

  const sendSockets = (JSON: string) => {
    websocket.send(JSON)
  }
  const getLastMessage = () => {
    // '/messages/' + roomID?._id +

    Api.get(`/messages/${roomID?._id}?page=${page}&size=20`).then(
      ({ data }) => {
        console.log(data)

        const messageLast: ImessagesAPI[] | undefined = data.content

        setMessages((previousMessages) =>
          page === 1
            ? GiftedChat.append(
                previousMessages,
                convertSocketMessToMessageList(messageLast ? messageLast : [])
              )
            : GiftedChat.append(
                convertSocketMessToMessageList(messageLast ? messageLast : []),
                previousMessages
              )
        )
      }
    )
  }

  const convertSocketMessToMessageList = (messageLast: ImessagesAPI[]) => {
    let messageList: IMessage[] = []
    if (messageLast) {
      for (var i = 0; i < messageLast.length; i++) {
        if (messageLast[i].attachments.length > 0) {
          var temp: IMessage[] = messageLast[i].attachments.map((url) => {
            return {
              _id: messageLast[i]._id + url,
              text: messageLast[i].content,
              createdAt: new Date(messageLast[i].created_at),
              image: url,
              user: {
                _id:
                  messageLast[i].sender_id === userID ? 1 : messageLast[i]._id,
                name: messageLast[i]._id === userID ? 'Me' : userTarget?.name,
                avatar: userTarget?.avatar,
              },
            }
          })
          messageList = messageList.concat(temp)
        } else {
          messageList.push({
            _id: messageLast[i]._id,
            text: messageLast[i].content,
            createdAt: new Date(messageLast[i].created_at),
            user: {
              _id: messageLast[i].sender_id === userID ? 1 : messageLast[i]._id,
              name: messageLast[i]._id === userID ? 'Me' : userTarget?.name,
              avatar: userTarget?.avatar,
            },
          })
        }
      }
    }
    return messageList
  }
  const onChange = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])
  const isCloseToTop = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
  }: any) => {
    const paddingToTop = 0
    return (
      contentSize.height - layoutMeasurement.height - paddingToTop <=
      contentOffset.y
    )
  }
  const scrollTop = () => {
      setPage(previousPage=> previousPage+1)
  }
  const onSend = useCallback((messages = []) => {
    console.log('s', messages)
    messages.map((a: any) => {
      const message = {
        action: 'send-message',
        sender_id: userID,
        content: a.text,
        receiver_id: userTarget?._id,
        attachments: [],
        room_id: roomID?._id,
        created_at: new Date().toJSON(),
      }
      dispatch(ConversationAction.updateList(message))
      var json = JSON.stringify(message)
      sendSockets(json)
    })
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    )
  }, [])
  return {
    scrollTop,
    userID,
    roomID,
    userTarget,
    onSend,
    messages,
    handlePickImage,
  }
}
