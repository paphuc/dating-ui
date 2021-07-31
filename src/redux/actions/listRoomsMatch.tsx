import { Alert } from 'react-native'
import constants from '../constants'
import { IRegisterUser, IUser } from '../../interfaces'
import API from '../../common/Api'
export default {
  listRoomsMatched,
}

function listRoomsMatched(id: string) {
  return (dispatch: any) => {
    API.get(`/matches/${id}`)
      .then(({ data }) => {
        dispatch({
          type: constants.LIST_ROOM,
          payload: { roomList: data },
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: constants.COMMON_ERROR,
          payload: err.response.data,
        })
        dispatch({
          type: constants.LIST_ERROR,
          payload: { ...err.response.data },
        })
      })
  }
}
