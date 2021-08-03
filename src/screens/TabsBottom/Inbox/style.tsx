import { StyleSheet } from 'react-native'

import Layout from '../../../constants/Layout'
export default StyleSheet.create({
  Header: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  MatchedContainer: {
    margin: 10,
    height: Layout.window.height * 0.2,
  },
})
