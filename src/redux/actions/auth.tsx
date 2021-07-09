import { Alert } from 'react-native'
import constants from '../constants/auth'
import { IRegisterUser, IUser } from '../../interfaces'
import API from '../../common/Api'
export default {
	login,
	register,
	logout
}

function login(user: IUser) {
	return (dispatch: any) => {
		API.post('/login', user).then(({ data }) => {
			dispatch({ type: constants.AUTH_LOGIN, payload: { ...data } })
		}).catch((err) => {
			console.log(err)
			dispatch({ type: constants.AUTH_ERROR, payload: { ...err.response.data } })

			Alert.alert(
				"Login failed",
				JSON.stringify(err.response.data),
			);
		})
	}
}

function register(user: IRegisterUser) {
	return (dispatch: any) => {
		API.post('/signup', user).then(({ data }) => {
			dispatch({ type: constants.AUTH_LOGIN, payload: { ...data } })
		}).catch((err) => {

			dispatch({ type: constants.AUTH_ERROR, payload: { ...err.response.data } })

			Alert.alert(
				"Register failed",
				JSON.stringify(err.response.data),
			);

		})
	}
}

function logout() {
	return (dispatch: any) => {
		dispatch({ type: constants.AUTH_LOGOUT, payload: {} })
	}
}