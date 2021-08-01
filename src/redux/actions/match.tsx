import constants from '../constants'
import API from '../../common/Api'
export default {
  getList,
}

function getList(id: string) {
  return (dispatch: any) => {
    dispatch({
      type: constants.MATCH_LOADING,
    })
    API.get(`/users/${id}/matches?matched=true`)
      .then(({ data }) => {
        dispatch({
          type: constants.MATCH_USERS_LIST,
          payload: { content: data.content },
        })
      })
      .catch((err) => {
        dispatch({
          type: constants.MATCH_ERROR,
          payload: { ...err.response.data },
        })
        dispatch({
          type: constants.COMMON_ERROR,
          payload: { ...err.response.data },
        })
      })
  }
}
