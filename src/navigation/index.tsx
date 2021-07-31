import React, { FC, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector, useDispatch } from 'react-redux'
import Login from '../screens/Login'
import UpdateProfile from '../screens/UpdateProfile'
import ChatBox from '../screens/ChatBox'
import Register from '../screens/Register'
import BottomTab from './BottomTabNavigator'
import ModelNavigator from './ModalNavigator'
import { Toast } from '../components/Message'

export default function RootNavigator() {
  const Stack = createStackNavigator<any>()
  const user = useSelector((value: any) => value.authStore)
  const Common = useSelector((value: any) => value.commonStore)

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
  //restore tokens in here

  return (
    <NavigationContainer>
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
