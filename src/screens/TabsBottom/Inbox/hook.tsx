import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import jwt_decode from 'jwt-decode'
import {
  RootStackParamList,
  BottomTabParamList,
} from '../../../navigation/types'
import { IRoom, IUserInRoom } from '../../../interfaces'
import { useSelector, useDispatch } from 'react-redux'
import { default as ConversationAction } from '../../../redux/actions/room'
import { default as MatchedAction } from '../../../redux/actions/match'
import { IUser } from '../../../interfaces'
import { Toast } from '../../../components/Message'

export type PropsInterface = {
  navigation: StackNavigationProp<any, 'BottomTab'>
}

export default function Hook(props?: PropsInterface) {
  const dispatch = useDispatch()
  const AuthUser: IUser = useSelector((value: any) => value.authStore?.user)

  const Matched = useSelector((state: any) => state.matchedStore)
  const matches = useSelector((state: any) => state.matchedStore.content)

  const Room = useSelector((value: any) => value.roomStore)
  const rooms: IRoom[] = useSelector((value: any) => value.roomStore?.content)

  const handleConversationRefresh = () => {
    dispatch(ConversationAction.getList(AuthUser?._id))
  }

  const handleMatchedRefresh = () => {
    console.log('Handle matched')
    dispatch(MatchedAction.getList(AuthUser?._id))
  }

  const getTargetUser = (arr: IUserInRoom[]): IUserInRoom | undefined => {
    return arr.find((u: IUserInRoom) => u._id != AuthUser?._id)
  }
  const handleNavigateToChat = (user: IUser) => {
    const room = rooms.find((r) => r.users.find((u) => u._id == user._id))
    if (room == undefined) {
      Toast.show({
        title: `Error`,
        text: 'Conversation not found',
        color: 'orange',
      })
    }
    const userTarget = room && getTargetUser(room.users)
    props?.navigation.navigate('Modal', {
      screen: 'ChatBoxScreen',
      params: {
        userTarget: userTarget,
        room: room,
        userID: AuthUser._id,
      },
    })
  }
  const handleNavigate = (room: IRoom) => {
    const userTarget = getTargetUser(room.users)
    props?.navigation.navigate('Modal', {
      screen: 'ChatBoxScreen',
      params: {
        userTarget: userTarget,
        room: room,
        userID: AuthUser._id,
      },

    })
  }
  useEffect(() => {
    handleConversationRefresh()
    handleMatchedRefresh()
  }, [])

  return {
    rooms,
    Room,
    matches,
    Matched,
    AuthUser,
    handleNavigate,
    handleConversationRefresh,
    handleMatchedRefresh,
    handleNavigateToChat,
  }
}
