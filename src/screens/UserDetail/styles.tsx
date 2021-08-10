import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'
export default StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    zIndex: 1,
  },
  ImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  Name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  Age: {
    fontSize: 23,
    color: 'white',
  },
  Hobby: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    fontStyle:'italic',
  },
  About: {
    fontSize: 14,
    paddingTop: 5,
    color: 'white',
  },
  Image: {
    width: Layout.window.width,
    height: Layout.window.height,
  },
  FloatContainer: {
    flex: 1,
    width: Layout.window.width,
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
  },
})
