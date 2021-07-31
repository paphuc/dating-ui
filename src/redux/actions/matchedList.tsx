import { Alert } from 'react-native'
import constants from '../constants/matchList'
import { IUser } from '../../interfaces'
import API from '../../common/Api'
import { ActionType } from '../reducers/matchedList'
export default {
  getListLiked,
}


function getListLiked(id: string) {
  return (dispatch: any) => {
    API.get(`/users/${id}/matches?matched=true`)
      .then(({ data }) => {
        dispatch({
          type: constants.MATCH_USERS_LIST,
          payload: data,
        })
      })
      .catch((err) => {
        dispatch({
          type: constants.LIST_ERROR,
          payload: { ...err.response.data },
        })
      })
  }
}
