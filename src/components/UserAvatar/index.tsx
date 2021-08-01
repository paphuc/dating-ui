import React from 'react'
import { View } from 'react-native'
import { Image, Text } from 'react-native-elements'
import styles from './style'
export default function ({ source, name }: any) {
  return (
    <View style={styles.Container}>
      <Image source={source && { uri: source }} style={styles.Image} />
      <Text style={styles.Name}>{name}</Text>
    </View>
  )
}
