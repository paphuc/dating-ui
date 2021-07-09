import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import AuthActions from '../../redux/actions/auth'
export default function HomeScreen(props: any) {
	const user = useSelector((value: any) => value.authStore)
	const dispatch = useDispatch()
	return (

		<View>
			<Text>
				{JSON.stringify(user)}
			</Text>
			<Button title="Logout" onPress={() => dispatch(AuthActions.logout())} />
		</View>
	)
}
