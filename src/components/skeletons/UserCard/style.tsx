import { StyleSheet } from 'react-native'
import Layout from '../../../constants/Layout'

export default StyleSheet.create({
  Container: {
    flexDirection: 'column',
    margin: 10,
    backgroundColor: '#90AFC5',
    width: Layout.window.width * 0.4,
    height: Layout.window.width * 0.6,
    borderRadius: 10,
  },
  Image: {
    width: Layout.window.width * 0.35,
    height: Layout.window.width * 0.4,
    margin: Layout.window.width * 0.025,
  },
  ContentShort: {
    width: Layout.window.width * 0.2,
    height: 20,
    marginBottom: 6,
    marginLeft: 6,
  },
  Content: {
    width: Layout.window.width * 0.3,
    height: 20,
    marginBottom: 6,
    marginLeft: 6,
    marginTop: 6,
  },
})
