import { Alert } from 'react-native'
import constants from '../constants'
import { IRegisterUser, ILogin } from '../../interfaces'
import API from '../../common/Api'
export default {
  login,
  register,
  logout,
}

function login(user: ILogin) {
  return (dispatch: any) => {
    dispatch({ type: constants.AUTH_LOADING })

    API.post('/login', user)
      .then(({ data }) => {
        dispatch({
          type: constants.AUTH_LOGIN,
          payload: { ...data },
        })
      })
      .catch((err) => {
        dispatch({
          type: constants.COMMON_ERROR,
          payload: err.response.data,
        })

        dispatch({
          type: constants.AUTH_ERROR,
          payload: { ...err.response.data },
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

        Alert.alert('Login failed', JSON.stringify(err.response.data))
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
