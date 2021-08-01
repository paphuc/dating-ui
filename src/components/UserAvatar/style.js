import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'

export default StyleSheet.create({
	Container: {
		flexDirection: 'column',
		backgroundColor: 'white',
		width: Layout.window.height * 0.2 * 3 / 4,
		height: Layout.window.height * 0.2,
		borderRadius: 10,
		...Layout.styles.Shadow,
	},
	ImageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	Image: {
		width: Layout.window.height * 0.2 * 3 / 4,
		height: Layout.window.height * 0.2,
		borderRadius:5
	},
	Name: {
		position: 'absolute',
		padding: 5,
		fontSize: 16,
		fontWeight: 'bold',
		bottom:0,
		color:'white'
	},
})
