import React, { useState } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
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
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Icon name='exclamation' size={30} color={'white'} />
          </View>
        )
      }
      placeholderStyle={{ backgroundColor: '#2e2e2e' }}
    />
  )
}
