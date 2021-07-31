import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Image } from 'react-native-elements'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import SkeletonContent from 'react-native-skeleton-content'
import { DefaultImage } from '../../constants/Image'
interface Props {
  layout?: any
  source: any
  style?: Object | Array<Object>
}
export default function SkeletonImage(props: Props) {
  const [isLoading, setLoading] = useState(false)
  return (
    <Image
      source={
        props.source?.uri?.toString().length > 0
          ? props.source
          : { uri: DefaultImage }
      }
      style={props.style}
      onLoadStart={() => {
        setLoading(true)
      }}
      onLoadEnd={() => {
        setLoading(false)
      }}
      onError={() => {
        setLoading(false)
      }}
      PlaceholderContent={
        isLoading ? (
          <ActivityIndicator />
        ) : (
          <Icon name='exclamation' size={30} color={'grey'} />
        )
      }
      placeholderStyle={{ backgroundColor: '#e6e6e6' }}
    />
  )
}
