import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileScreen } from '../screens/TabsBottom'
import { ProfileParamList } from './types'

const ProfileStack =
  createStackNavigator<ProfileParamList>()

export default function TabProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          headerTitle: 'Me',
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  )
}
