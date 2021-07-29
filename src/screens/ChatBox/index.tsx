import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import styles from './style'

import useHook, { Props } from './hook'

export default function ChatBox({
  navigation,
  route,
}: Props) {
  const { messages, onSend } = useHook({
    navigation,
    route,
  })

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
