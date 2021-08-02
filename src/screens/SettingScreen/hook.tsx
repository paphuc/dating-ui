import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'
import { IUser, UserUpdateProps } from '../../interfaces'
import { RouteProp } from '@react-navigation/native'
import { Alert, Platform } from 'react-native'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../redux/actions/auth'

export type Props = {
  route: RouteProp<RootStackParamList, 'SettingScreen'>
  navigation: StackNavigationProp<RootStackParamList, 'SettingScreen'>
}

export default function Hook(props: Props) {
  const item = props.route.params.item

  const dispatch = useDispatch()
  const AuthUser: IUser = useSelector((value: any) => value.authStore?.user)

  const [disable, setDisabled] = React.useState(false)

  useEffect(() => {
    setDisabled(item.disable)
  }, [item])
  const handleChangeDisable = () => {
    dispatch(Actions.disable(AuthUser?._id, !disable))
    setDisabled(!disable)
    dispatch(Actions.getMe(AuthUser?._id))
  }

  return { item, disable, handleChangeDisable }
}
