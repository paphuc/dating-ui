import AsyncStorage from '@react-native-async-storage/async-storage'
import constants from '../constants/notification'

const initState = {
  messages: undefined,
}

export default function notiReducer(
  state: Object = initState,
  action: any
) {
  switch (action.type) {
    case constants.REGISTER_DEVICE: {
      return { ...action.payload }
    }
    case constants.UNREGISTER_DEVICE: {
      return {
        errors: action.payload,
      }
    }
    case constants.REQUEST_FAILED: {
      return { messages: undefined }
    }
    default:
      return state
  }
}
