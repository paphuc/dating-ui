import { Alert } from 'react-native'
import constants from '../constants/like'
import API from '../../common/Api'
export default {
  getList,
}

function getList(id: string) {
  return (dispatch: any) => {
    dispatch({ type: constants.LIKED_LOADING })

    API.get(`/users/${id}/matches?matched=false`)
      .then(({ data }) => {
        dispatch({
          type: constants.LIKED_USERS_LIST,
          payload: { likedList: data },
        })
      })
      .catch((err) => {
        dispatch({
          type: constants.LIKED_ERROR,
          payload: { ...err.response.data },
        })
      })
  }
}
