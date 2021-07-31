import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import jwt_decode from 'jwt-decode'
import { JwtProps, IUser } from '../../../interfaces'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../../redux/actions/matchedList'


export default function Hook() {
  const [user, setUser] = useState<IUser | null>(null)

  const state = useSelector(
    (value: any) => value.authStore
  )
  const { content } = useSelector(
    (state: any) => state.matchedListStore
  )
  
  const dispatch = useDispatch()

  useEffect(() => {
    if (state.isLogged) {
      var decodedHeader: JwtProps = jwt_decode(state.token)
      dispatch(Actions.getListLiked(decodedHeader?._id))
    }
  }, [state])

  const getAge = (age: string): string => {
    return (new Date().getFullYear() - new Date(age).getFullYear()).toString()
  }
  return {
    getAge,
    content,
  }
}
