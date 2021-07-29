import React, {
  useState,
  useEffect,
  useCallback,
} from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'
import { RouteProp } from '@react-navigation/native'
import {
  GiftedChat,
  IMessage,
} from 'react-native-gifted-chat'
import Config from '../.../../../../config'
import Api from '../../common/Api'

type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  'ChatBox'
>

type ProfileScreenNavigationProp =
  StackNavigationProp<
    RootStackParamList,
    'ChatBox'
  >

export type Props = {
  route: ProfileScreenRouteProp
  navigation: ProfileScreenNavigationProp
}
interface messagesAPI {
  _id: string
  attachments: string
  content: string
  created_at: string
  room_id: string
  sender_id: string
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
  websocket.onmessage = (e) => {
    const messagesSocket = JSON.parse(e.data)
    if (messagesSocket.sender_id !== userID) {
      const mess = {
        _id: messagesSocket._id,
        text: messagesSocket.content,
        createdAt: new Date(
          messagesSocket.created_at
        ),
        user: {
          _id: messagesSocket.sender_id,
          name: userTarget?.name,
          avatar: userTarget?.avatar,
        },
      }
      onChange(mess)
    }
  }
  const sendSockets = (JSON: string) => {
    websocket.send(JSON)
  }
  const getLastMessage = () => {
    Api.get('/messages/' + roomID?._id).then(
      ({ data }) => {
        const messageLast:
          | messagesAPI[]
          | undefined = data
        const messageList: IMessage[] =
          messageLast
            ? messageLast.reverse().map((e) => {
                return {
                  _id: e._id,
                  text: e.content,
                  createdAt: new Date(
                    e.created_at
                  ),
                  user: {
                    _id:
                      e.sender_id === userID
                        ? 1
                        : e._id,
                    name:
                      e._id === userID
                        ? 'Me'
                        : userTarget?.name,
                    avatar: userTarget?.avatar,
                  },
                }
              })
            : []
        setMessages((previousMessages) =>
          GiftedChat.append(
            previousMessages,
            messageList
          )
        )
      }
    )
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
  }
}
