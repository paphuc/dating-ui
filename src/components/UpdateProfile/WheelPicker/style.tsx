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
    EmptyInputValue: {
        fontSize: 20,
        color: 'white'
    },
    InputValue: {
        fontSize: 20,
        color: 'black'
    },
    Modal: {
        
    },
    PickerContainer: {
        height: 250,
        marginTop: Layout.window.height - 250,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'silver',
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    Picker: {
        height: 250,
    },
})