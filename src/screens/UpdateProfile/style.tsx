import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'

export default StyleSheet.create({
  Container: {
    flex: 1,
  },
  keyboardContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  ProfileContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    // margin: 20,
  },
  MediaContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  ImageContainer: {
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 20
  },
  InputView: {
    marginTop: 10,
    marginBottom: 10
  },
  Button: {
    width: Layout.window.width * 0.9,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    zIndex: 4,
    ...Layout.styles.Shadow,
  },
})
