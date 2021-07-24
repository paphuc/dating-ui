import React, { useState, useEffect } from 'react'
import { IUser } from '../../interfaces'
import Actions from '../../redux/actions/auth'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Hook(props: any) {
  const [user, setUser] = useState<IUser>({
    email: 'tphuc@gmail.com',
    password: '123456',
  })
  const dispatch = useDispatch()
  const auth = useSelector(
    (value: any) => value.authStore
  )

  const handleLogin = () => {
    dispatch(Actions.login(user))
  }

  const handleRegister = () => {
    props.navigation.navigate('Register')
  }

  return {
    user,
    setUser,
    handleLogin,
    handleRegister,
  }
}
