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
  const handleUnlike = (target: string) => {
    dispatch(Actions.unlike(State.user?._id, target))
  }
  useEffect(() => {
    if (Store?.content?.length >= 0) {
      setUser(Store.content)
    }
  }, [Store])

  return {
    handleRefresh,
    handleUnlike,
    Store,
    users,
  }
}
