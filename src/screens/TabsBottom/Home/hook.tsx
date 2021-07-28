import React, { useState, useEffect } from 'react'
import { IUser } from '../../../interfaces'
import { useDispatch, useSelector } from 'react-redux'
import Actions from '../../../redux/actions/userList'

export default function Hook() {
  const [users, setUsers] = useState([] as IUser[])
  const UserStore = useSelector((value: any) => value.userListStore)
  const dispatch = useDispatch()

  const handleRefresh = () => {
    dispatch(Actions.getList())
  }

  useEffect(() => {
    if (UserStore?.totalItems >= 0) {
      setUsers(UserStore.listUsers)
    }
    console.log(UserStore)
  }, [UserStore])

  return {
    users,
    setUsers,
    dispatch,
    UserStore,
    handleRefresh,
  }
}
