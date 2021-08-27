import React from 'react'
import PushNotification from 'react-native-push-notification'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LocalNotification = () => {
  PushNotification.localNotification({
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: 'Local Notification Title',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: ['Yes', 'No'],
  })
}
const handleButtonPress = () => {
  LocalNotification()
}

const RemotePushController = () => {
  React.useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: async function (token: any) {
        console.log('token:', token)
        await AsyncStorage.setItem('token_device', JSON.stringify(token))
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification: any) {
        console.log('REMOTE NOTIFICATION ==>', notification)
        // process the notification here
      },
      popInitialNotification: true,
      requestPermissions: true,
    })
  }, [])

  return null
}

export { RemotePushController }
