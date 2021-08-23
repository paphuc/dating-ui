import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigation/types'
import { IUser } from '../../../interfaces'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../../redux/actions/auth'
import ActionNotification from '../../../redux/actions/notification'

export type InboxScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BottomTab'
>

export type PropsInterface = {
  navigation: any
}

export default function Hook(props?: PropsInterface) {
  const Auth = useSelector((value: any) => value.authStore)
  const User = useSelector((value: any) => value.authStore.user)
  const Info = useSelector((value: any) => value.authStore.info)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await dispatch(ActionNotification.unregisterDevice(User?._id))
    dispatch(Actions.logout())
  }
  useEffect(() => {
    dispatch(Actions.getMe(User?._id))
  }, [])

  const handleNavigate = (destination: string) => {
    props?.navigation.navigate('Modal', {
      screen: destination,
      params: { item: Info },
    })
  }

  return {
    Auth,
    User,
    Info,
    handleNavigate,
    handleLogout,
  }
}
