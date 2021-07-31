import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button, Rating, Image } from 'react-native-elements'
import SkeletonImage from '../SkeletonImage'
import { IUser } from './../../interfaces'
import { getAge } from '../../common/Utils'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import IconFloatButton from '../IconFloatButton'
import styles from './style'

type Props = {
  data: IUser
  navigation: any
  onPress: () => void
}

const App = ({ data, navigation, onPress }: Props) => {
  const handlePress = () => {
    navigation.navigate('Modal', {
      screen: 'UserDetail',
      params: { currentUser: data , button: 'like'},
    })
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={handlePress}>
      <View style={styles.Container}>
        <SkeletonImage
          layout={[styles.Image]}
          source={{
            uri: data.media[0],
          }}
          style={styles.Image}
        />
        <Text style={styles.Name}>{`${data.name}, ${getAge(
          data.birthday
        )}`}</Text>
        <IconFloatButton
          name={'heart'}
          containerStyle={{
            right: 10,
            bottom: -22.5,
            backgroundColor: '#F38BA0',
          }}
          onPress={onPress}
        />
      </View>
    </TouchableOpacity>
  )
}
export default App
