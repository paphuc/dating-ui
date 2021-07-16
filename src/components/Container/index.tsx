import React from 'react'
import { View, StyleSheet, Platform, SafeAreaView } from 'react-native'

export default function (props: any) {
	return (
		<SafeAreaView style={styles.SafeArea}>
			{props.children}
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	SafeArea: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: Platform.OS == 'android' ? 25 : 0
	}
})
