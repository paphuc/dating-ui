import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { LikeScreens, MatchScreens } from '../screens/TabsBottom'
import { LikeParamList } from './types'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Layout from '../constants/Layout'
import LikeScreen from '../screens/TabsBottom/Like'

const LikeStack = createStackNavigator<LikeParamList>()


export default function TabLikeNavigator() {
  return (
    <LikeStack.Navigator>
      <LikeStack.Screen
        name='Like'
        component={LikeScreen}
        options={{
          headerTitle: 'Me',
          headerShown: false,
        }}
      />
    </LikeStack.Navigator>
  )
}
