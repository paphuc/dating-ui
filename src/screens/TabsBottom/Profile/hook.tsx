import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import jwt_decode from 'jwt-decode'
import { RootStackParamList } from '../../../navigation/types'
import {
  JwtProps,
  UserProps,
} from '../../../interfaces'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import API from '../../../common/Api'
import navigation from '../../../navigation'

export default function Hook() {
  const [user, setUser] =
    useState<UserProps | null>(null)

  const state = useSelector(
    (value: any) => value.authStore
  )

  useEffect(() => {
    if (state.isLogged) {
      var decodedHeader: JwtProps = jwt_decode(
        state.token
      )
      API.get(
        '/users/' + decodedHeader?._id
      ).then(({ data }) => {
        setUser(data)
      })
    }
  }, [state])
  const getAge = (age: string): string => {
    return (
      new Date().getFullYear() -
      new Date(age).getFullYear()
    ).toString()
  }
  return {
    getAge,
    user,
  }
}
