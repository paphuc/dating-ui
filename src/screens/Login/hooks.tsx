import React, { useState, useEffect } from 'react'
import { IUser } from '../../interfaces'
import Actions from '../../redux/actions/auth'
import { useSelector, useDispatch } from 'react-redux'


export default function Hook() {
    const [user, setUser] = useState<IUser>({ email: "", password: "" })
    const dispatch = useDispatch()
    const state = useSelector((value: any) => value.authStore)

    const handleLogin = () => {
        dispatch(Actions.login(user))
    }

    useEffect(() => {
        console.log(state)
    }, [state])

    return {
        user,
        setUser,
        handleLogin
    }
}
