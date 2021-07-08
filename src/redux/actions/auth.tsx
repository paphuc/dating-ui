import constants from '../constants/auth'
import { IUser } from '../../interfaces'

export default {
	login,
}

function login(user: IUser) {
	return (dispatch: any) => {
		//CAll API success
		dispatch({ type: constants.AUTH_LOGIN_SUCCESS, payload: { ...user } })
		//CAll API failure
		dispatch({type: constants.AUTH_LOGIN_FAIL})
	}
}