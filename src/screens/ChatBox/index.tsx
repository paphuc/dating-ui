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
        // onSend={(messages) => onSend(messages)}
      />
    )
  }
  // const renderMessageImage = (props: any) => {
  //   return (
  //     <View key={props.currentMessage?._id+Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)}>
  //       <TouchableOpacity
  //         onPress={() => setIsVisible(true)}
  //       >
  //         <Image
  //           style={{ width: 100, height: 100 }}
  //           source={{
  //             uri: props.currentMessage?.image,
  //           }}
  //         />
  //       </TouchableOpacity>
  //       <ImageView
  //         animationType={'none'}
  //         images={[
  //           { uri: props.currentMessage?.image }
  //         ]}
          
  //         imageIndex={0}
  //         visible={visible}
  //         onRequestClose={() =>
  //           setIsVisible(false)
  //         }
  //       />
  //     </View>
  //   )
  // }
  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      renderActions={renderActions}
      user={{
        _id: 1,
      }}
      // renderMessageImage={(props) =>
      //   renderMessageImage(props)
      // }
    />
  )
}
