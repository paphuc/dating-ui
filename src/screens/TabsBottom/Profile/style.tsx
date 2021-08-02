import { StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'
import Layout from '../../../constants/Layout'

export default StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    padding: 10,
    backgroundColor: 'white',
  },
  Avatar: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  Name: {
    marginTop: 10,
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
  },
  ButtonContainer: {
    marginTop: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
