import React, { useState, useEffect } from 'react'
import { IRegisterUser } from '../../interfaces'
import Actions from '../../redux/actions/auth'
import {
  useSelector,
  useDispatch,
} from 'react-redux'

export default function Hook(props: any) {
  const [user, setUser] = useState<IRegisterUser>(
    {
      name: 'Phuc',
      email: 'tphuc@gmail.com',
      password: '123456',
      retypePassword: '123456',
    }
  )
  const dispatch = useDispatch()
  const state = useSelector(
    (value: any) => value.authStore
  )

  const handleRegister = () => {
    dispatch(Actions.register(user))
  }

  const handleLogin = () => {
    props.navigation.navigate('Login')
  }

  useEffect(() => {}, [state])

  return {
    user,
    setUser,
    handleLogin,
    handleRegister,
  }
}
