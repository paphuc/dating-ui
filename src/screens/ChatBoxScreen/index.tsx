import React from 'react'
import { GiftedChat, Actions, ActionsProps } from 'react-native-gifted-chat'
import Icon from 'react-native-vector-icons/FontAwesome'
import Container from '../../components/Container'
import useHook, { Props } from './hook'

export default function ChatBoxScreen({ navigation, route }: Props) {
  const { messages, onSend, handlePickImage } = useHook({
    navigation,
    route,
  })
  const [visible, setIsVisible] = React.useState(false)

  const renderActions = (props: Readonly<ActionsProps>) => {
    return (
      <Actions
        {...props}
        options={{
          ['Send Image']: handlePickImage,
        }}
        icon={() => <Icon name={'image'} size={20} />}
      />
    )
  }

  return (
    <Container>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        renderActions={renderActions}
        user={{
          _id: 1,
        }}
      />
    </Container>
  )
}
