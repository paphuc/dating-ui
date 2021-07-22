import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  UserContainer:{
    width: width*0.4,
    height: width*0.5,
    borderRadius:15,
    backgroundColor:'#90AFC5'
  }
})

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
