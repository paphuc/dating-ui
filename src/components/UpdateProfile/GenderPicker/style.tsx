import { StyleSheet } from "react-native";
import Layout from '../../../constants/Layout'

export default StyleSheet.create({
    Container: {

    },
    TitleView: {
        
    },
    Title: {
        fontSize: 15,
        color: 'silver',
        fontWeight: 'bold'
    },
    OptionGroup: {
        width: Layout.window.width * 0.85,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    OptionView: {
        marginTop: 10,
        width: Layout.window.width * 0.35,
        height: Layout.window.width * 0.35,
        justifyContent: 'center',
        borderRadius: 20
    },
    GenderlabelView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    Icon: {

    },
    GenderText: {
        fontSize: 20
    }
})