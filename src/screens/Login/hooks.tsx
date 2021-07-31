import React, { useState, useEffect } from 'react'
import { ILogin } from '../../interfaces'
import Actions from '../../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Hook(props: any) {
  const [user, setUser] = useState<ILogin>({
    email: 'tphuc@gmail.com',
    password: '12345678',
  })
  const dispatch = useDispatch()
  const auth = useSelector((value: any) => value.authStore)

  const handleLogin = () => {
    dispatch(Actions.login(user))
  }

  const handleRegister = () => {
    props.navigation.navigate('Register')
  }

  return {
    auth,
    user,
    setUser,
    handleLogin,
    handleRegister,
  }
}
