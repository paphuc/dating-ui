import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserDetail from '../screens/UserDetail'

const ModelStack = createStackNavigator()

export default function ModelNavigator() {
  return (
    <ModelStack.Navigator mode='model'>
      <ModelStack.Screen
        name='UserDetail'
        component={UserDetail}
        options={{
          headerShown: false,
        }}
      />
    </ModelStack.Navigator>
  )
}
