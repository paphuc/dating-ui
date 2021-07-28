import React, { FC } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useSelector, useDispatch } from 'react-redux'
import Login from '../screens/Login'
import Register from '../screens/Register'
import BottomTab from './BottomTabNavigator'
export default function RootNavigator() {
  const Stack = createStackNavigator<any>()
  const user = useSelector((value: any) => value.authStore)

  //restore tokens in here

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user?.isLogged ? (
          <>
            <Stack.Screen name='BottomTab' component={BottomTab} />
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
