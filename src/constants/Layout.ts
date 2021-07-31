import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  UserContainer: {
    width: width * 0.4,
    height: width * 0.5,
    borderRadius: 15,
    backgroundColor: '#90AFC5',
  },
  Shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
})

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  styles,
}
