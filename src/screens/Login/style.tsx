import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'
export default StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  FormContainer: {
    margin: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  Logo: {
    width: Layout.window.width * 0.9,
    height: Layout.window.width * 0.3,
  },
})
