import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, IMessage } from 'react-native-gifted-chat'
import styles from './style'

import useHook, { Props } from './hook'

export default function ChatBox({
    navigation,
    route,
  }: Props) {
 
  const {
   roomID,userTarget,messages,onSend
  } = useHook({ navigation, route })

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}
