import { StyleSheet } from 'react-native'
import Layout from '../../../constants/Layout'
import Colors from '../../../constants/Colors'

const avatarSize = Layout.window.width * 0.25
const editButtonSize = avatarSize * 0.3

export default StyleSheet.create({
    TouchableView: {
        
    },
    ImageContainer: {
        margin: 10,
    },
    Image: {
        height: avatarSize*1.3,
        width: avatarSize,
        borderRadius: avatarSize/6,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'pink',
    },
    EditView: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        borderRadius: editButtonSize/2,
    },
    AddView: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: editButtonSize/2,
        overflow: 'hidden',
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