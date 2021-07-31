import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'

export default StyleSheet.create({
  Container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: Layout.window.width * 0.4,
    height: Layout.window.width * 0.7,
    borderRadius: 10,
    marginBottom: 30,
    ...Layout.styles.Shadow,
  },
  ImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    width: Layout.window.width * 0.4,
    height: Layout.window.width * 0.5,
  },
  Name: {
    padding: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
