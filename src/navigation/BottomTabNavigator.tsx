import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import { BottomTabParamList } from './types'
import HomeNav from './HomeNavigator'
import ProfileNav from './ProfileNavigator'
import LikeNav from './LikeNavigator'
import InboxNav from './InboxNavigator'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={HomeNav}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='heart' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Like'
        component={LikeNav}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='thumbs-up' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Inbox'
        component={InboxNav}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name='comments' color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={ProfileNav}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}
