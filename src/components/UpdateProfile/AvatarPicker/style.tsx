import { StyleSheet } from 'react-native'
import Layout from '../../../constants/Layout'
import Colors from '../../../constants/Colors'

const avatarSize = Layout.window.width * 0.5
const editButtonSize = avatarSize * 0.3

export default StyleSheet.create({
    TouchableView: {
        
    },
    ImageContainer: {
        margin: 5,
    },
    Image: {
        height: avatarSize,
        width: avatarSize,
        borderRadius: avatarSize/2,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'silver',
    },
    EditView: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        borderRadius: editButtonSize/2,
    },
    EditCircle: {
        backgroundColor: Colors.light.tint,
        margin: 3,
        width: editButtonSize,
        height: editButtonSize,
        borderRadius: editButtonSize/2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Icon: {
        color: 'white'
    }, 
    Indicator: {
        flex: 1,
    },
    EmptyImage: {
        width: avatarSize,
        height: avatarSize
    }
})