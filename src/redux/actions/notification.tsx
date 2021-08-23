import { Alert } from 'react-native'
import constants from '../constants/notification'
import { UserUpdateProps } from '../../interfaces'
import API from '../../common/Api'
import { clearLocalStorage, getToken } from '../../common/Utils'

export default {
  registerDevice,
  unregisterDevice,
}

function registerDevice(idUser: UserUpdateProps) {
  return async (dispatch: any) => {
    const tokenStr = await getToken('token_device')
    if (tokenStr) {
      const { token } = JSON.parse(tokenStr)
      API.post('/notification', {
        user_id: idUser,
        token_device: token,
      })
        .then(({ data }) => {
          dispatch({
            type: constants.REGISTER_DEVICE,
            payload: { ...data },
          })
        })
        .catch((err) => {
          dispatch({
            type: constants.REQUEST_FAILED,
            payload: { ...err.response.data },
          })
          Alert.alert('Register failed', JSON.stringify(err.response.data))
        })
    }
  }
}
function unregisterDevice(idUser: UserUpdateProps) {
  return async (dispatch: any) => {
    const tokenStr = await getToken('token_device')
    if (tokenStr) {
      const { token } = JSON.parse(tokenStr)
      API.delete('/notification', {
        user_id: idUser,
        token_device: token,
      })
        .then(({ data }) => {
          dispatch({
            type: constants.REGISTER_DEVICE,
            payload: { ...data },
          })
        })
        .catch((err) => {
          dispatch({
            type: constants.REQUEST_FAILED,
            payload: { ...err.response.data },
          })
          Alert.alert('Unregister failed', JSON.stringify(err.response.data))
        })
    }
  }
}
