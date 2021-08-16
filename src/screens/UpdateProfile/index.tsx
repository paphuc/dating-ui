import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome'

import Container from '../../components/Container'
import {
  AvatarPicker,
  InputElement,
  Genderpicker,
  DatePicker
} from '../../components/UpdateProfile'
import styles from './style'

import useHook from './hook'

export default function UpdateProfileScreens(props: any) {
  const {
    user,
    imageArr,
    pickImage,
    setNameHandler,
    setGenderHandler,
    setBirthdayHandler
  } = useHook(props)

  return (
    <Container>
      <ScrollView style={styles.Container}>
        <View style={styles.ProfileContainer}>
          <View style={styles.MediaContainer}>
              <AvatarPicker
                onClick={pickImage}
                imageUrl={imageArr[imageArr.length - 1]}
              />
          </View>
        
          <View style={styles.InputView}>
            <InputElement
              title={'Name'}
              onChange={setNameHandler}
              defaultValue={user?.name}
            />
          </View>

          <View style={styles.InputView}>
            <Genderpicker
              title='Gender'
              defaultValue={user?.gender}
              onChange={setGenderHandler}
            />
          </View>

          <View style={styles.InputView}>
            <DatePicker
              title='Birthday'
              defaultValue={user?.birthday}
              onChange={setBirthdayHandler}
            />
          </View>
          

        </View>
      </ScrollView>
    </Container>
  )
}
