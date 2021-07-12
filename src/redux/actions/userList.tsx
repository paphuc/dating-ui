import { Alert } from 'react-native'
import constants from '../constants/userList'
import { UserProps } from '../../interfaces'
import API from '../../common/Api'
export default {
	getList,
}

function getList() {
	return (dispatch: any) => {
		API.get('/users').then(({ data }) => {
			dispatch({ type: constants.USER_LIST, payload: { ...data } })
		}).catch((err) => {
			console.log(err)
			dispatch({ type: constants.USER_ERROR, payload: { ...err.response.data } })
			Alert.alert(
				"Get failed",
				JSON.stringify(err.response.data),
			);
		})
	}
}
