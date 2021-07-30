import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { JwtProps, IUser } from '../../../interfaces'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../../redux/actions/like'

export default function Hook() {
  const [users, setUser] = useState([] as Array<IUser>)
  const State = useSelector((value: any) => value.authStore)
  const Store = useSelector((state: any) => state.likedStore)
  const dispatch = useDispatch()

  const handleRefresh = () => {
    dispatch(Actions.getList(State.user?._id))
  }
  useEffect(() => {
    if (Store?.likedList?.length >= 0) {
      setUser(Store.likedList)
    }
  }, [Store])

  return {
    handleRefresh,
    Store,
    users,
  }
}
