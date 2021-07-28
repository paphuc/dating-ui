import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { LikeScreens, MatchScreens } from '../screens/TabsBottom'
import { LikeTabParamList, LikeTabScreensParamList } from './types'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Layout from '../constants/Layout'

const TopTabLikedScreen =
  createMaterialTopTabNavigator<LikeTabScreensParamList>()
const LikeStack = createStackNavigator<LikeTabParamList>()

function LikeTabScreens() {
  return (
    <View style={{ flex: 1 }}>
      <TopTabLikedScreen.Navigator
        initialRouteName='Like'
        tabBarOptions={{
          tabStyle: {
            borderRadius: 20,
            margin: 2,
            justifyContent: 'center',
            alignItems: 'center',
          },
          labelStyle: { fontSize: 15 },
          contentContainerStyle: {
            justifyContent: 'center',
          },
          activeTintColor: '#56BBFF',
          inactiveTintColor: 'silver',
          indicatorStyle: {
            width: Layout.window.width / 4,
            left: (Layout.window.width / 2 - Layout.window.width / 4) / 2,
          },
          style: { margin: 20, borderRadius: 20 },
        }}
      >
        <TopTabLikedScreen.Screen name='Like' component={LikeScreens} />
        <TopTabLikedScreen.Screen name='Match' component={MatchScreens} />
      </TopTabLikedScreen.Navigator>
    </View>
  )
}

export default function TabLikeNavigator() {
  return (
    <LikeStack.Navigator>
      <LikeStack.Screen
        name='LikeTabScreens'
        component={LikeTabScreens}
        options={{
          headerTitle: 'Me',
          headerShown: false,
        }}
      />
    </LikeStack.Navigator>
  )
}
