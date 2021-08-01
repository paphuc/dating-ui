import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserDetail from '../screens/UserDetail'
import UpdateProfile from '../screens/UpdateProfile'
import ChatBoxScreen from '../screens/ChatBoxScreen'
const Stack = createStackNavigator()

export default function ModelNavigator() {
  return (
    <Stack.Navigator mode='model'>
      <Stack.Screen
        name='UserDetail'
        component={UserDetail}
        options={{
          headerShown: false,
        }}
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
        name='ChatBoxScreen'
        component={ChatBoxScreen}
        options={{
          headerShown: true,
          headerTitle: 'Chat',
          headerStatusBarHeight: 0,
        }}
      />
    </Stack.Navigator>
  )
}
