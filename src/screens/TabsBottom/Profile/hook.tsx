import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import jwt_decode from 'jwt-decode'
import { RootStackParamList } from '../../../navigation/types'
import { JwtProps, IUser } from '../../../interfaces'
import { useSelector, useDispatch } from 'react-redux'
import API from '../../../common/Api'
import navigation from '../../../navigation'

export type InboxScreenNavigationProp =
  StackNavigationProp<
    RootStackParamList,
    'BottomTab'
  >

export type PropsInterface = {
  navigation: InboxScreenNavigationProp
}

export default function Hook(
  props?: PropsInterface
) {
  const [user, setUser] =
    useState<IUser| null>(null)

  const state = useSelector((value: any) => value.authStore)

  useEffect(() => {
    if (state.isLogged) {
      var decodedHeader: JwtProps = jwt_decode(
        state.token
      )
      API.get(
        '/users/' + decodedHeader?._id
      ).then(({ data }) => {
        
        if(data.media === null){
          props?.navigation.navigate(
            'UpdateProfileScreens', {item: data }
          )
        }
        setUser(data)
      })
    }
  }, [state])

  const handleNavigate = (item: IUser| null) => {
    props?.navigation.navigate(
      'UpdateProfileScreens', {item: item }
    )
  }

  const getAge = (age: string): string => {
    return (new Date().getFullYear() - new Date(age).getFullYear()).toString()
  }
  return {
    getAge,
    user,
    handleNavigate,
  }
}
