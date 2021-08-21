import { StyleSheet } from "react-native";
import Layout from '../../../constants/Layout'

export default StyleSheet.create({
    Container: {
        width: Layout.window.width * 0.85,
      },
      TitleView: {
            
      },
      Title: {
        fontSize: 15,
        color: 'silver',
        fontWeight: 'bold',
      },
    TextInput: {
        fontSize: 20,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
    }
})