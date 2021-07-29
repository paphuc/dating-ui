import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import jwt_decode from 'jwt-decode'
import {
  RootStackParamList,
  BottomTabParamList,
} from '../../../navigation/types'
import { RoomInterface } from '../../../redux/reducers/listRoomsMatch'
import {
  JwtProps,
  UserProps,
} from '../../../interfaces'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import Actions from '../../../redux/actions/listRoomsMatch'

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
  const dispatch = useDispatch()
  const listRooms: RoomInterface[] = useSelector(
    (value: any) => value.listRoomsMatch.roomList
  )
  const state = useSelector(
    (value: any) => value.authStore
  )
  const [userID, setUserID] =
    React.useState<string>('')


    const [isFetching, setIsFetching] = React.useState(false);

    const fetchData = () => {
      getListRooms()
      setIsFetching(false);
    };
    
    const onRefresh = () => {
      setIsFetching(true);
      fetchData();
    };

  const getAge = (age: string): string => {
    return (
      new Date().getFullYear() -
      new Date(age).getFullYear()
    ).toString()
  }

  const getListRooms = () => {
    if (state.isLogged) {
      var decodedHeader: JwtProps = jwt_decode(
        state.token
      )
      setUserID(decodedHeader?._id)
      dispatch(
        Actions.listRoomsMatched(
          decodedHeader?._id
        )
      )
    }
  }

  const handleNavigate = (
    room: RoomInterface
  ) => {
    const userTargetArr = room.users.filter(
      (predicate) => {
        return predicate._id != userID
      }
    )
    const userTarget =
    userTargetArr.length != 1
        ? undefined
        : userTargetArr[0]

    props?.navigation.navigate('ChatBox', {
      userTarget: userTarget,
      room: room,
      userID: userID,
    })
  }
  useEffect(() => {
    getListRooms()
  }, [])

  return {
    listRooms,
    userID,
    handleNavigate,onRefresh,isFetching
  }
}
