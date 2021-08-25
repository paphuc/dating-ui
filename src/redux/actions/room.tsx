import { Alert } from 'react-native'
import constants from '../constants'
import { IRegisterUser, IUser } from '../../interfaces'
import API from '../../common/Api'
export default {
  getList,
  UpdateList,
}

function getList(id: string) {
  return (dispatch: any) => {
    dispatch({ type: constants.ROOM_LOADING })

    API.get(`/matches/${id}`)
      .then(({ data }) => {
        dispatch({
          type: constants.ROOM_LIST,
          payload: { content: data },
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
function UpdateList(message: any) {
  return (dispatch: any) => {
    dispatch({
      type: constants.ROOM_UPDATE,
      payload: { data: message },
    })
  }
}


