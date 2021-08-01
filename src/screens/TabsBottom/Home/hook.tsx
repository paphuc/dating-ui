import React, { useState, useEffect } from 'react'
import { IUser } from '../../../interfaces'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../../redux/actions/user'

export default function Hook() {
  const [users, setUsers] = useState([] as IUser[])
  const State = useSelector((value: any) => value.authStore)
  const UserStore = useSelector((value: any) => value.userStore)
  const dispatch = useDispatch()

  const handleRefresh = () => {
    dispatch(Actions.getList(State.user?._id))
  }
  const handleLike = (target: string) => {
    dispatch(Actions.like(State.user?._id, target))
  }

  useEffect(() => {
    if (UserStore?.totalItems >= 0) {
      setUsers(UserStore.content)
    }
  }, [UserStore])

  return {
    users,
    setUsers,
    dispatch,
    UserStore,
    handleRefresh,
    State,
    handleLike,
  }
}
