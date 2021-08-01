import React, { useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { JwtProps, IUser } from '../../../interfaces'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../../redux/actions/like'

export default function Hook() {
  const [users, setUser] = useState([] as Array<IUser>)
  const Auth = useSelector((value: any) => value.authStore)
  const Liked = useSelector((state: any) => state.likedStore)
  const dispatch = useDispatch()

  const handleRefresh = () => {
    dispatch(Actions.getList(Auth.user?._id))
  }
  const handleUnlike = (target: string) => {
    dispatch(Actions.unlike(Auth.user?._id, target))
  }
  useEffect(() => {
    if (Liked.content) {
      setUser(Liked.content)
    }
  }, [Liked])

  return {
    handleRefresh,
    handleUnlike,
    Liked,
    users,
  }
}
