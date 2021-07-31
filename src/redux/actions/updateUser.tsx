import { Alert } from 'react-native'
import constants from '../constants/updateUser'
import { UserUpdateProps } from '../../interfaces'
import API from '../../common/Api'
export default {
  update,
  init
}

function update(user: UserUpdateProps) {
  return (dispatch: any) => {
    API.put('/users', user)
      .then(({ data }) => {
        dispatch({
          type: constants.UPDATE_USERS,
          payload: { ...data },
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: constants.UPDATE_ERROR,
          payload: { ...err.response.data },
        })

        Alert.alert(
          'Login failed',
          JSON.stringify(err.response.data)
        )
      })
  }
}
function init() {
  return (dispatch: any) => {
    dispatch({
      type: constants.UPDATE_INIT,
      payload: {},
    })
  }
}
