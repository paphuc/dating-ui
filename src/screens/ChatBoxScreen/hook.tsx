import React, {
  useState,
  useEffect,
  useCallback,
} from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import * as ImagePicker from 'expo-image-picker'
import { RouteProp } from '@react-navigation/native'
import {
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat'
import { ImessagesAPI } from '../../interfaces'
import { RootStackParamList } from '../../navigation/types'
import Config from '../../../config'
import Api from '../../common/Api'
import CloudinaryService from '../../common/Cloudinary'

import { Alert, Platform } from 'react-native'

type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  'ChatBoxScreen'
>

type ProfileScreenNavigationProp =
  StackNavigationProp<
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
  const userTarget =
    props?.route.params?.userTarget
  const [messages, setMessages] = useState<
    IMessage[]
  >([])
  const websocket = new WebSocket(
    `${Config.WS}:${Config.Port}/ws?id=${roomID?._id}`
  )

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert(
            'Sorry, we need camera roll permissions to make this work!'
          )
        }
      }
    })()

    getLastMessage()
    var a = JSON.stringify({
      action: 'join-room',
      room_id: roomID?._id,
      sender_id: userID,
    })

    websocket.onopen = () => {
      sendSockets(a)
    }
  }, [])

  const handlePickImage = async () => {
    let result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.All,
        quality: 1,
      })
    if (result && !result?.cancelled) {
      const localUri = result.uri
      const filename = localUri.split('/').pop()
      if (filename) {
        const match = /\.(\w+)$/.exec(filename)
        const type = match
          ? `image/${match[1]}`
          : `image`

        const dataPicture = JSON.parse(
          JSON.stringify({
            uri: localUri,
            name: filename,
            type,
          })
        )
        const formData = new FormData()
        formData.append('file', dataPicture)

        const url =
          await CloudinaryService.updateImageCould(
            formData
          )
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
          createdAt: new Date(
            new Date().toJSON()
          ),
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
      onChange(
        convertSocketMessToMessageList([
          messagesSocket,
        ])
      )
    }
  }

  const sendSockets = (JSON: string) => {
    websocket.send(JSON)
  }
  const getLastMessage = () => {
    Api.get('/messages/' + roomID?._id).then(
      ({ data }) => {
        const messageLast:
          | ImessagesAPI[]
          | undefined = data

        setMessages((previousMessages) =>
          GiftedChat.append(
            previousMessages,
            convertSocketMessToMessageList(
              messageLast ? messageLast : []
            ).reverse()
          )
        )
      }
    )
  }

  const convertSocketMessToMessageList = (
    messageLast: ImessagesAPI[]
  ) => {
    let messageList: IMessage[] = []
    if (messageLast) {
      for (
        var i = 0;
        i < messageLast.length;
        i++
      ) {
        if (
          messageLast[i].attachments.length > 0
        ) {
          var temp: IMessage[] = messageLast[
            i
          ].attachments.map((url) => {
            return {
              _id: messageLast[i]._id + url,
              text: messageLast[i].content,
              createdAt: new Date(
                messageLast[i].created_at
              ),
              image: url,
              user: {
                _id:
                  messageLast[i].sender_id ===
                  userID
                    ? 1
                    : messageLast[i]._id,
                name:
                  messageLast[i]._id === userID
                    ? 'Me'
                    : userTarget?.name,
                avatar: userTarget?.avatar,
              },
            }
          })
          messageList = messageList.concat(temp)
        } else {
          messageList.push({
            _id: messageLast[i]._id,
            text: messageLast[i].content,
            createdAt: new Date(
              messageLast[i].created_at
            ),
            user: {
              _id:
                messageLast[i].sender_id ===
                userID
                  ? 1
                  : messageLast[i]._id,
              name:
                messageLast[i]._id === userID
                  ? 'Me'
                  : userTarget?.name,
              avatar: userTarget?.avatar,
            },
          })
        }
      }
    }
    return messageList
  }
  const onChange = useCallback(
    (messages = []) => {
      setMessages((previousMessages) =>
        GiftedChat.append(
          previousMessages,
          messages
        )
      )
    },
    []
  )

  const onSend = useCallback((messages = []) => {
    messages.map((a: any) => {
      var json = JSON.stringify({
        action: 'send-message',
        sender_id: userID,
        content: a.text,
        created_at: new Date().toJSON(),
      })
      sendSockets(json)
    })
    setMessages((previousMessages) =>
      GiftedChat.append(
        previousMessages,
        messages
      )
    )
  }, [])
  return {
    userID,
    roomID,
    userTarget,
    onSend,
    messages,
    handlePickImage,
  }
}
