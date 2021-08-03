import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'
import { IUser, UserUpdateProps } from '../../interfaces'
import { RouteProp } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import { Alert, Platform } from 'react-native'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../redux/actions/updateUser'
import ActionsAuth from '../../redux/actions/auth'

import CloudinaryService from '../../common/Cloudinary'

type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  'UpdateProfileScreens'
>

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'UpdateProfileScreens'
>

export type Props = {
  route: ProfileScreenRouteProp
  navigation: ProfileScreenNavigationProp
}

export default function Hook(props?: Props) {
  const item = props?.route.params?.item

  const dispatch = useDispatch()

  const [imageArr, setImageArr] = useState<string[]>([])

  const [name, setName] = useState<string>(item ? item.name : '')
  const [gender, setGender] = useState<string>(item ? item.gender : '')
  const [birthday, setBirthday] = useState<Date | string>(
    item ? item.birthday : ''
  )
  const [country, setCountry] = useState<string>(item ? item.country : '')
  const [hobby, setHobby] = useState<string>(item ? item.hobby.join(', ') : '')
  const [relationship, setRelationship] = useState<string>(
    item ? item.relationship : ''
  )
  const [lookingFor, setLookingFor] = useState<string>(
    item ? item.looking_for : ''
  )
  const [sex, setSex] = useState<string>(item ? item.sex : '')
  const [about, setAbout] = useState<string>(item ? item.about : '')
  const [user, setUser] = useState<IUser | null | undefined>(
    props?.route.params?.item
  )

  const update = useSelector((value: any) => value.updateUser)

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
    setImageArr(user ? user.media : [])
    if (update?.code === '01') {
      Alert.alert('Notification', 'Update Profile Completed!!', [
        {
          text: 'OK',
          onPress: () => {
            dispatch(Actions.init())
            props?.navigation.goBack();
          },
        },
      ])
    }
  }, [update])

  const pickImage = async () => {
    if (imageArr.length >= 9) {
      Alert.alert('Notification', 'Max number picture 9', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ])
      return
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      allowsEditing: true,
      aspect: [9, 16],
    })

    if (result && !result?.cancelled) {
      const localUri = result.uri
      const filename = localUri.split('/').pop()
      if (filename) {
        const match = /\.(\w+)$/.exec(filename)
        const type = match ? `image/${match[1]}` : `image`

        const dataPicture = JSON.parse(
          JSON.stringify({
            uri: localUri,
            name: filename,
            type,
          })
        )
        setImageArr((previousImageUrl) => [...previousImageUrl, 'loading'])

        const formData = new FormData()
        formData.append('file', dataPicture)

        const url = await CloudinaryService.updateImageCould(formData)

        if (url != 'error') {
          setImageArr((previousImageUrl) => {
            previousImageUrl.pop()
            return [...previousImageUrl, url]
          })
        }
      }
    }
  }

  const removeItemInArray = (index: number) => {
    Alert.alert('Confirm remove picture', 'Your choose', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => setImageArr(imageArr.filter((_, i) => index !== i)),
      },
    ])
  }

  const getAge = (age: string): string => {
    return (new Date().getFullYear() - new Date(age).getFullYear()).toString()
  }
  const setNameHandler = (value: string) => {
    setName(value)
  }
  const setGenderHandler = (value: string) => {
    setGender(value)
  }
  const setBirthdayHandler = (value: string | Date) => {
    setBirthday(value)
  }
  const setCountryHandler = (value: string) => {
    setCountry(value)
  }
  const setRelationshipHandler = (value: string) => {
    setRelationship(value)
  }
  const setLookingForHandler = (value: string) => {
    setLookingFor(value)
  }
  const setSexHandler = (value: string) => {
    setSex(value)
  }
  const setAboutHandler = (value: string) => {
    setAbout(value)
  }
  const setHobbyHandler = (value: string) => {
    setHobby(value)
  }

  const updateHandler = () => {
    if (item) {
      const userUpdate: UserUpdateProps = {
        _id: item._id,
        name: name,
        birthday: birthday,
        gender: gender,
        media: imageArr,
        country: country,
        hobby: hobby.split(', '),
        sex: sex,
        about: about,
        looking_for: lookingFor,
        relationship: relationship,
      }
      dispatch(Actions.update(userUpdate))
      dispatch(ActionsAuth.getMe(item._id))
    }
  }

  return {
    user,
    setUser,
    pickImage,
    imageArr,
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
  }
}
