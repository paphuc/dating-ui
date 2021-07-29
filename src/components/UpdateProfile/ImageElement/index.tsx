import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import styles from './style'

interface ImageElementProps {
  url: string
}
const ImageElement = ({
  url,
}: ImageElementProps) => {
  return url === 'loading' ? (
    <ActivityIndicator
      size='large'
      style={styles.ActivityIndicator}
      color='#00ff00'
    />
  ) : (
    <Image
      source={{ uri: url }}
      style={styles.ImageStyle}
    />
  )
}

export default ImageElement
