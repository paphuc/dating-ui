import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'

export default StyleSheet.create({
  Container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: Layout.window.width * 0.4,
    height: Layout.window.width * 0.7,
    borderRadius: 10,
    padding: 10,
    marginBottom:50,
    ...Layout.styles.Shadow,
  },
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: Layout.window.width * 0.35,
    height: Layout.window.width * 0.5,
  },
  Name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  Age: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})
