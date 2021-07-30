import React from 'react'
import {
  GiftedChat,
  Actions,
  ActionsProps,
  MessageImage,
  IMessage,
} from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/FontAwesome'
// import ImageModal,{ImageView} from 'react-native-image-modal';
import ImageView from 'react-native-image-viewing'

import styles from './style'

import useHook, { Props } from './hook'
import {
  TouchableOpacity,
  View,
} from 'react-native'
import { Image } from 'react-native-elements'

export default function ChatBox({
  navigation,
  route,
}: Props) {
  const { messages, onSend, handlePickImage } =
    useHook({
      navigation,
      route,
    })
  const [visible, setIsVisible] =
    React.useState(false)

  const renderActions = (
    props: Readonly<ActionsProps>
  ) => {
    return (
      <Actions
        {...props}
        options={{
          ['Send Image']: handlePickImage,
        }}
        icon={() => (
          <Icon name={'image'} size={20} />
        )}
      />
    )
  }

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      renderActions={renderActions}
      user={{
        _id: 1,
      }}
    />
  )
}
