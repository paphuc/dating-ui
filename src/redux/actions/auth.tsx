import { Alert } from 'react-native'
import constants from '../constants'
import { IRegisterUser, ILogin } from '../../interfaces'
import API from '../../common/Api'
export default {
  login,
  getMe,
  register,
  logout,
  disable
}

function login(user: ILogin) {
  return (dispatch: any) => {
    dispatch({ type: constants.AUTH_LOADING })

    API.post('/login', user)
      .then(({ data }) => {
        dispatch({
          type: constants.AUTH_LOGIN,
          payload: data,
        })
      })
      .catch((err) => {
        dispatch({
          type: constants.COMMON_ERROR,
          payload: err.response.data,
        })

        dispatch({
          type: constants.AUTH_ERROR,
          payload: err.response.data,
        })
      })
  }
}

function getMe(id: string) {
  return (dispatch: any) => {
    dispatch({ type: constants.AUTH_LOADING })

    API.get('/users/' + id)
      .then(({ data }) => {
        console.log(data)
        dispatch({
          type: constants.AUTH_GET_ME,
          payload: data,
        })
      })
      .catch((err) => {
        dispatch({
          type: constants.COMMON_ERROR,
          payload: err.response.data,
        })

        dispatch({
          type: constants.AUTH_ERROR,
          payload: err.response.data,
        })
      })
  }
}

function register(user: IRegisterUser) {
  return (dispatch: any) => {
    dispatch({ type: constants.AUTH_LOADING })

    API.post('/signup', user)
      .then(({ data }) => {
        dispatch({
          type: constants.AUTH_LOGIN,
          payload: { ...data },
        })
      })
      .catch((err) => {
        dispatch({
          type: constants.AUTH_ERROR,
          payload: { ...err.response.data },
        })
      })
  }
}

function disable(id: string, disable: boolean) {
  return (dispatch: any) => {
    API.patch(`/users/${id}/disable`, { disable: disable })
      .then(({ data }) => {
        dispatch({
          type: constants.COMMON_MESSAGE,
          payload: data,
        })
      })
      .catch((err) => {
        dispatch({
          type: constants.COMMON_ERROR,
          payload: err.response.data,
        })
      })
  }
}

function logout() {
  return (dispatch: any) => {
    dispatch({
      type: constants.AUTH_LOGOUT,
      payload: {},
    })
  }
}
