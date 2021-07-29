import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList, BottomTabParamList } from '../../../navigation/types'
import { UserProps } from '../../../interfaces'

export type InboxScreenNavigationProp =
  StackNavigationProp<RootStackParamList,"BottomTab">

export type PropsInterface = {
  navigation: InboxScreenNavigationProp
}

export default function Hook(
  props?: PropsInterface
) {
 
  const handleNavigate = (item: UserProps) => {
    props?.navigation.navigate('UpdateProfileScreens')
  }

  const getAge = (age: string): string => {
    return (
      new Date().getFullYear() -
      new Date(age).getFullYear()
    ).toString()
  }

  useEffect(() => {
    handleNavigate
  }, [])

  return {
    
  }
}
