import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome'

import Container from '../../components/Container'
import {
  ImageElement,
  InputElement,
  DatePicker,
  GenderPicker,
} from '../../components/UpdateProfile'
import styles from './style'

import useHook, { Props } from './hook'

type GendersType = 'Male' | 'Female' | 'Other'

export default function UpdateProfileScreens({ navigation, route }: Props) {
  const {
    user,
    imageArr,
    pickImage,
    removeItemInArray,
    updateHandler,

    setNameHandler,
    setGenderHandler,
    setBirthdayHandler,
    setCountryHandler,
    setRelationshipHandler,
    setLookingForHandler,
    setSexHandler,
    setAboutHandler,
    setHobbyHandler,
  } = useHook({ navigation, route })
  const [gender, setGender] = React.useState<string | undefined>(user?.gender)

  return (
    <Container>
      <ScrollView style={styles.ContainerFlex}>
        <View>
          <View style={styles.MediaContainer}>
            {imageArr.map((url, i) => {
              return (
                <View key={i} style={styles.ViewContainerImage}>
                  <ImageElement url={url} />
                  <View style={styles.DelButtonContainer}>
                    <Button
                      style={{
                        borderRadius: 20,
                      }}
                      icon={
                        <Icon name='times-circle' size={15} color='white' />
                      }
                      onPress={() => removeItemInArray(i)}
                    ></Button>
                  </View>
                </View>
              )
            })}
          </View>
          <View style={styles.PickButtonContainer}>
            <Button
              title='Pick an image from device'
              buttonStyle={styles.PickButton}
              onPress={pickImage}
            />
          </View>
        </View>
        <View>
          <InputElement
            title={'Name'}
            onChange={setNameHandler}
            defaultValue={user?.name}
          />
          <GenderPicker
            onChange={setGenderHandler}
            gender={user ? user?.gender : ''}
          />
          <View>
            <DatePicker
              onChange={setBirthdayHandler}
              birthday={user?.birthday}
            />
          </View>
          <InputElement
            title={'Country'}
            onChange={setCountryHandler}
            defaultValue={user?.country}
          />
          <InputElement
            title={'Hobby'}
            onChange={setHobbyHandler}
            multiline
            defaultValue={user?.hobby.join(', ')}
          />
          <InputElement
            title={'Relationship'}
            onChange={setRelationshipHandler}
            defaultValue={user?.relationship}
          />
          <InputElement
            title={'Looking for'}
            onChange={setLookingForHandler}
            defaultValue={user?.looking_for}
          />
          <InputElement
            title={'Sex'}
            onChange={setSexHandler}
            defaultValue={user?.sex}
          />
          <InputElement
            title={'About'}
            onChange={setAboutHandler}
            defaultValue={user?.about}
            multiline
          />
        </View>
        <Button title='Update' onPress={updateHandler}></Button>
      </ScrollView>
    </Container>
  )
}
