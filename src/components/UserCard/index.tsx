import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Rating, Image } from 'react-native-elements'
import SkeletonImage from '../SkeletonImage'
import { IUser } from './../../interfaces'
import { getAge, getThumbnailLink } from '../../common/Utils'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import IconButton from '../IconButton'
import styles from './style'
import Colors from '../../constants/Colors'

type Props = {
  data: IUser
  navigation: any
  onPress: () => void
}

const App = ({ data, navigation, onPress }: Props) => {
  const handlePress = () => {
    navigation.navigate('Modal', {
      screen: 'UserDetail',
      params: { currentUser: data, button: 'like' },
    })
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={handlePress}>
      <View style={styles.Container}>
        <SkeletonImage
          layout={[styles.Image]}
          source={{
            uri: getThumbnailLink(data.media[0], 'large'),
          }}
          style={styles.Image}
        />
        <Text style={styles.Name}>{`${data.name}, ${getAge(
          data.birthday
        )}`}</Text>
        <IconButton
          name={'heart'}
          colors={Colors.PinkGradient}
          containerStyle={{
            position: 'absolute',
            right: 0,
            bottom: -20,
          }}
          onPress={onPress}
        />
      </View>
    </TouchableOpacity>
  )
}
export default App
