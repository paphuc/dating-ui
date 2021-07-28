import { StyleSheet } from 'react-native'
import Layout from '../../constants/Layout'
export default StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  ScrollContainer: {
    flex: 0.9,
  },
  ImageContainer: {
    flex: 0.5,
    backgroundColor: 'yellow',
  },
  InfoContainer: {
    flex: 0.5,
    backgroundColor: 'white',
    padding: 10,
  },
  Name: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  Age: {
    fontSize: 23,
  },
  About: {
    fontSize: 20,
    padding: 10,
  },
  ButtonContainer: {
    flex: 0.1,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  Image: {
    width: Layout.window.width,
    height: Layout.window.width,
  },
})
