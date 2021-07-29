import React, { useState, useEffect } from 'react'
import { IUser } from '../../interfaces'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../redux/actions/user'

interface Props {
  initUser: IUser
}
export default function Hook() {
  const [currentUser, setCurrentUser] = useState({} as IUser)
  const [users, setUsers] = useState([] as IUser[])
  const UserStore = useSelector((value: any) => value.userListStore)
  const dispatch = useDispatch()
  const State = useSelector((value: any) => value.authStore)

  const handleLike = (target: string) => {
    dispatch(Actions.like(State.user?._id, target))
  }
  useEffect(() => {
    if (UserStore?.totalItems >= 0) {
      setUsers(UserStore.listUsers)
    }
  }, [UserStore])
  return {
    currentUser,
    setCurrentUser,
    users,
    dispatch,
    UserStore,
    handleLike
  }
}
