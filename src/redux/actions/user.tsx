import { Alert } from 'react-native'
import constants from '../constants/user'
import { IUser } from '../../interfaces'
import API from '../../common/Api'

export default {
  getList,
  like,
}

function getList() {
  return (dispatch: any) => {
    dispatch({ type: constants.USER_LOADING })

    API.get('/users')
      .then(({ data }) => {
        dispatch({
          type: constants.USER_LIST,
          payload: data,
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: constants.USER_ERROR,
          payload: err.response.data,
        })
        Alert.alert('Get failed', JSON.stringify(err.response.data))
      })
  }
}

function like(user: string, target: string) {
  return (dispatch: any) => {
    API.post('/matches', { user_id: user, target_user_id: target })
      .then(({ data }) => {
        dispatch({
          type: constants.USER_LIKE,
          payload: data,
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: constants.USER_ERROR,
          payload: err.response.data,
        })
      })
  }
}
