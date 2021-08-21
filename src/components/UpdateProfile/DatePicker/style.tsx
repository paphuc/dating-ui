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
    InputContainer: {
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomColor: 'silver',
        borderBottomWidth: 1,
    },
    InputValue: {
        fontSize: 20,
    },
    Modal: {
        
    },
    DatePickerContainer: {
        height: 250,
        marginTop: Layout.window.height - 250,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'silver',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    DatePicker: {
        height: 250,
        // shadowColor: 'black', 
        // shadowRadius: 3, 
        // shadowOpacity: 1, 
        // shadowOffset: { height: 0, width: 0 }
    }
})