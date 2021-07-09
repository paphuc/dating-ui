import { StyleSheet } from "react-native"

export default StyleSheet.create({
	Container: {
		justifyContent: "center",
		alignContent: "center",
		flex:1,
		padding:0, 
		margin:0, 
	},
	AvatarNameContainer: {
		// flex: 1,
		marginHorizontal: 20,
		marginTop: 10,
		flexDirection:"column",
		justifyContent: "center",
		alignItems:"center" ,
	},
	AvatarStyle: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},
	CenterStyle: { 
		justifyContent: "center",
		alignItems: "center"
	},
	HobbyContainer: {
		flexDirection: "row",
		flexWrap: 'wrap',
		marginHorizontal: 20,
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	PictureContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		borderRadius:10,
		backgroundColor:"white",
	}
})
