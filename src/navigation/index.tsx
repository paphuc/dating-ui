import React, { FC, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector, useDispatch } from 'react-redux'
import Login from '../screens/Login'
import Register from '../screens/Register'
import BottomTab from './BottomTabNavigator'
import ModelNavigator from './ModalNavigator'
import { Toast } from '../components/Message'
import Container from '../components/Container'
import { RemotePushController } from './Notification'
import Actions from '../redux/actions/notification'

export default function RootNavigator() {
  const Stack = createStackNavigator<any>()
  const user = useSelector((value: any) => value.authStore)
  const Common = useSelector((value: any) => value.commonStore)
  const dispatch = useDispatch()

  useEffect(() => {
    if (Common?.message) {
      Toast.show({
        title: `Code ${Common.message.code}`,
        text: Common.message.message,
        color: 'green',
      })
    } else if (Common?.error) {
      Toast.show({
        title: `Code ${Common.error.code}`,
        text: Common.error.message,
        color: 'orange',
      })
    }
  }, [Common])
  // send token devices to server
  useEffect(() => {
    ;(async () => {
      if (user.isLogged) {
        dispatch(Actions.registerDevice(user.user._id))
      }
    })()
  }, [user?.isLogged])
  return (
    <NavigationContainer>
      <RemotePushController />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user?.isLogged ? (
          <>
            <Stack.Screen name='BottomTab' component={BottomTab} />
            <Stack.Screen name='Modal' component={ModelNavigator} />
          </>
        ) : (
          <>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
