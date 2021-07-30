import { Alert } from 'react-native'
import constants from '../constants/matchList'
import { UserProps } from '../../interfaces'
import API from '../../common/Api'
import { ActionType } from '../reducers/matchedList'
export default {
  getListLiked,
}

export type DispatchType = (
  args: ActionType
) => ActionType

function getListLiked(id: string) {
  return (dispatch: DispatchType) => {
    API.get(`/users/${id}/matches?matched=true`)
      .then(({ data }) => {
        dispatch({
          type: constants.MATCH_USERS_LIST,
          payload: { content: data.content },
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({
          type: constants.LIST_ERROR,
          payload: { ...err.response.data },
        })
        Alert.alert(
          'Get failed',
          JSON.stringify(err.response.data)
        )
      })
  }
}
