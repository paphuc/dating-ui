import * as React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../constants/Colors'
import { BottomTabParamList } from './types'
import HomeNav from './HomeNavigator'
import ProfileNav from './ProfileNavigator'
import LikeNav from './LikeNavigator'
import InboxNav from './InboxNavigator'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

function TabBarIcon(props: any) {
  return (
    <FontAwesome
      size={30}
      style={{
        marginBottom: -3,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.12,
        shadowRadius: 3.22,
        elevation: 3,
      }}
      {...props}
      linear
    />
  )
}

export default function BottomTabNavigator() {
  // const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: Colors.light.tint,
        inactiveTintColor: Colors.Grey.Medium,
        style: {
          borderTopColor: 'white', //Change Like This
        },
        showLabel: false,
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
