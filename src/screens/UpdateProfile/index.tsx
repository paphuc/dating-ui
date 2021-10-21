import React from 'react'
import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Button } from 'react-native-elements'
import Colors from '../../constants/Colors'

import Container from '../../components/Container'
import {
  AvatarPicker,
  InputElement,
  Genderpicker,
  DatePicker,
  CountryInput,
  WheelPicker,
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
    setBirthdayHandler,
    setCountryHandler,
    setHobbyHandler,
    setRelationshipHandler,
    setLookingForHandler,
    setSexHandler,
    setAboutHandler,
    updateHandler,
    removeItemInArray,
  } = useHook(props)
  return (
    <Container>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <ScrollView style={styles.Container}>
          <View style={styles.ProfileContainer}>
            <View style={styles.MediaContainer}>
              {[...Array(9)].map((url, index) => {
                return (
                  <View style={styles.ImageContainer} key={index}>
                    <AvatarPicker
                      isExist={!!imageArr[index]}
                      onClick={imageArr[index] ? removeItemInArray : pickImage}
                      imageUrl={imageArr[index] ? imageArr[index] : 'none'}
                      index={index}
                    />
                  </View>
                )
              })}
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

            <View style={styles.InputView}>
              <CountryInput
                title='Country'
                defaultValue={user?.country}
                onChange={setCountryHandler}
              />
            </View>

            <View style={styles.InputView}>
              <InputElement
                title={'Hobbies'}
                onChange={setHobbyHandler}
                defaultValue={user?.hobby.join(', ')}
              />
            </View>

            <View style={styles.InputView}>
              <WheelPicker
                title={'Relationship'}
                onChange={setRelationshipHandler}
                defaultValue={user?.relationship}
                options={[
                  'Single',
                  'In RelationShip',
                  'Divorced',
                  'Engaged',
                  'Married',
                  'Widowed',
                  'In Complicated Relationship',
                ]}
              />
            </View>

            <View style={styles.InputView}>
              <InputElement
                title={'Looking For'}
                onChange={setLookingForHandler}
                defaultValue={user?.looking_for}
              />
            </View>

            <View style={styles.InputView}>
              <Genderpicker
                title='Interested In'
                defaultValue={user?.sex}
                onChange={setSexHandler}
                allowBoth={true}
              />
            </View>

            <View style={styles.InputView}>
              <InputElement
                title={'About'}
                onChange={setAboutHandler}
                defaultValue={user?.about}
                multiline={true}
              />
            </View>

            <View style={styles.InputView}>
              <Button
                linearGradientProps={{
                  colors: Colors.PinkGradient,
                  end: { x: 0, y: 0 },
                  start: { x: 0.8, y: 0.1 },
                }}
                buttonStyle={{ padding: 15 }}
                containerStyle={styles.Button}
                ViewComponent={LinearGradient}
                title='Update Profile'
                titleStyle={{ fontWeight: 'bold' }}
                onPress={updateHandler}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  )
}
