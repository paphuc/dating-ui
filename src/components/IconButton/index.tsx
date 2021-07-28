import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome as Icon } from '@expo/vector-icons'
import Layout from '../../constants/Layout'
export default function ({
  name,
  size = 20,
  color,
  containerStyle,
  onPress = () => {},
}: any) {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View
        style={[
          styles.Container,
          containerStyle,
          { width: 25 + size, height: 25 + size },
        ]}
      >
        <Icon name={name || 'home'} size={size} color={color || 'white'} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100000,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    ...Layout.styles.Shadow,
  },
})
