import constants from '../constants/auth'

const initState = {
	isLogged: false,
	token: undefined,
	errors: undefined,
}

export default function authReducer(state: Object = initState, action: any) {
	switch (action.type) {
		case constants.AUTH_LOGIN_SUCCESS: {
			return { isLogged: true, ...action.payload };
		}
		case constants.AUTH_LOGIN_FAIL: {
			return initState;
		}
		default:
			return state;
	}
}