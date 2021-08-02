import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'
import { IUser, UserUpdateProps } from '../../interfaces'
import { RouteProp } from '@react-navigation/native'
import { Alert, Platform } from 'react-native'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../redux/actions/auth'

type routeProp = RouteProp<RootStackParamList, 'SettingScreen'>

type navigationProp = StackNavigationProp<RootStackParamList, 'SettingScreen'>

export type Props = {
  route: routeProp
  navigation: navigationProp
}

export default function Hook(props?: Props) {
  const item = props?.route.params?.item

  const dispatch = useDispatch()
  const AuthUser: IUser = useSelector((value: any) => value.authStore?.user)
  console.log(item?.disable, AuthUser?._id)

  const [disable, setDisabled] = React.useState<boolean | undefined>(false)

  useEffect(() => {
    setDisabled(item?.disable)
  }, [item])
  const handleChangeDisable =()=>{
      const value = !disable
      setDisabled(value)
      dispatch(Actions.disable(AuthUser?._id, value))
      dispatch(Actions.getMe(AuthUser?._id))
  }

  return { item, disable, handleChangeDisable }
}
