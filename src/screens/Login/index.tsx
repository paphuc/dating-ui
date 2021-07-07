import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style'
export default function LoginScreen() {
	return (
		<View style={styles.Container}>
			<View>
			</View>
			{/* INPUT FORM */}
			<View style={styles.FormContainer}>
				<Input
					placeholder='email@adress.com'
					label="Your email"
					leftIcon={
						<Icon
							name='envelope'
							size={24}
							color={"grey"}
						/>
					}
				/>
				<Input
					placeholder="Password"
					label="Password"
					secureTextEntry
					leftIcon={
						<Icon
							name='lock'
							size={24}
							color={"grey"}
						/>
					}
				/>
				<Button title="Login" />
				<Button type="clear" title="I don't have account" />
			</View>
		</View>
	)
}