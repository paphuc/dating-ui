import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import Login from '../screens/Login'
import UpdateProfile from '../screens/UpdateProfile'
import ChatBox from '../screens/ChatBox'
import Register from '../screens/Register'
import BottomTab from './BottomTabNavigator'
import { RootStackParamList } from './types'
export default function RootNavigator() {
  const Stack =
    createStackNavigator<RootStackParamList>()
  const user = useSelector(
    (value: any) => value.authStore
  )

  //restore tokens in here

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        {user?.isLogged ? (
          <>
            <Stack.Screen
              name='BottomTab'
              component={BottomTab}
            />
            <Stack.Screen
              name='UpdateProfileScreens'
              component={UpdateProfile}
              options={{
                headerShown: true,
                headerTitle: 'Update Profile',
                headerStatusBarHeight: 0,
              }}
            />
            <Stack.Screen
              name='ChatBox'
              component={ChatBox}
              options={{
                headerShown: true,
                headerTitle: 'Chat',
                headerStatusBarHeight: 0,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name='Login'
              component={Login}
            />
            <Stack.Screen
              name='Register'
              component={Register}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
