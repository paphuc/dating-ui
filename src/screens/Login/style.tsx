import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'

export default StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  LoginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  FormContainer: {
    width: Layout.window.width * 0.85 > 300 ? 300 : Layout.window.width * 0.85,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.5)',
    bottom: 10,
    zIndex: 1,
  },
  Logo: {
    zIndex: 0,
    marginTop: 100,
    width: Layout.window.width * 0.9,
    height: Layout.window.width * 0.4,
    ...Layout.styles.Shadow,
  },
  Button: {
    width: Layout.window.width * 0.9 > 300 ? 300 : Layout.window.width * 0.9,
    borderRadius: 30,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    zIndex: 4,
    ...Layout.styles.Shadow,
  },
  SocialButton: {
    width: Layout.window.width * 0.9 > 300 ? 300 : Layout.window.width * 0.9,
    zIndex: 4,
  },
  Copyright: {
    color: 'white',
    textAlign: 'center',
  },
})
