import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/TabsBottom'
import  UserDetail from '../screens/UserDetail'
import { HomeParamList } from './types'

const HomeStack = createStackNavigator<HomeParamList>()

export default function TabHomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: 'Home',
          headerShown: false,
        }}
      />
  <HomeStack.Screen
        name='UserDetail'
        component={UserDetail}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  )
}
