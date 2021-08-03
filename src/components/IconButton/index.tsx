import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome as Icon } from '@expo/vector-icons'
import Layout from '../../constants/Layout'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../constants/Colors'
export default function ({
  name,
  size = 20,
  color,
  colors = Colors.MainBlueGradient,
  containerStyle,
  onPress = () => {},
}: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        zIndex: 1,
        ...Layout.styles.Shadow,
        ...containerStyle,
      }}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[
          styles.Container,
          {
            width: 30 + size,
            height: 30 + size,
            borderRadius: (30 + size) / 2,
          },
        ]}
      >
        <Icon name={name || 'home'} size={size} color={color || 'white'} />
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
})
