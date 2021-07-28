import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import SkeletonContent from 'react-native-skeleton-content'
import { IUser } from './../../interfaces'
import { getAge } from '../../common/Utils'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import IconFloatButton from '../IconFloatButton'
import styles from './style'

type Props = {
  data: IUser
  navigation: any
}

const App = ({ data, navigation }: Props) => {
  const handlePress = () => {
    console.log('Pressed')
    navigation.navigate('UserDetail', { currentUser: data })
  }
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={handlePress}>
      <View style={styles.Container}>
        <SkeletonContent
          containerStyle={styles.ImageContainer}
          isLoading={true}
          layout={[styles.Image]}
        ></SkeletonContent>
        <Text style={styles.Name}>{`${data.name}, ${getAge(
          data.birthday
        )}`}</Text>
        <IconFloatButton
          name={'times'}
          containerStyle={{
            left: 10,
            bottom: -25,
            backgroundColor: '#F6AE99',
          }}
        />
        <IconFloatButton
          name={'heart'}
          containerStyle={{
            right: 10,
            bottom: -25,
            backgroundColor: '#F38BA0',
          }}
        />
      </View>
    </TouchableOpacity>
  )
}
export default App
