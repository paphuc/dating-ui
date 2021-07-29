import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/updateUser'

const initState = {
  messages: undefined,
}

export default function authReducer(
  state: Object = initState,
  action: any
) {
  switch (action.type) {
    case constants.UPDATE_USERS: {
      return { ...action.payload }
    }
    case constants.UPDATE_ERROR: {
      return {
        errors: action.payload,
      }
    }
    case constants.UPDATE_INIT: {
      return { messages: undefined }
    }
    default:
      return state
  }
}
