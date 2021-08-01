import { Alert } from 'react-native'
import constants from '../constants'
import API from '../../common/Api'
export default { getList, unlike }

function getList(id: string) {
  return (dispatch: any) => {
    dispatch({ type: constants.LIKED_LOADING })

    API.get(`/users/${id}/matches?matched=false`)
      .then(({ data }) => {
        dispatch({
          type: constants.LIKED_USERS_LIST,
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

function unlike(user: string, target: string) {
  return (dispatch: any) => {
    API.delete('/matches', {
      user_id: user,
      target_user_id: target,
      matched: false,
    })
      .then(({ data }) => {
        dispatch({
          type: constants.COMMON_MESSAGE,
          payload: data,
        })

        dispatch({
          type: constants.LIKED_UNLIKE,
          payload: { user: target },
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
