import React from 'react'
import { ActivityIndicator, TouchableOpacity, View } from 'react-native'
import { Image, Text } from 'react-native-elements'
import styles from './style'
export default function ({ source, name, onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.Container}>
        <Image
          source={source && { uri: source }}
          style={styles.Image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.Name}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}
