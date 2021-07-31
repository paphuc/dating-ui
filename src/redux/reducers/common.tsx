import constants from '../constants/common'
import { IActionType } from '../../interfaces'

interface IProps {
  message: string | undefined
  error: string | undefined
}
const initState: IProps = {
  message: undefined,
  error: undefined,
}
export default function matchedList(
  state: IProps = initState,
  action: IActionType<IProps>
) {
  switch (action.type) {
    case constants.COMMON_MESSAGE: {
      return { ...initState, message: action.payload }
    }
    case constants.COMMON_ERROR: {
      return { ...initState, error: action.payload }
    }
    default:
      return state
  }
}
