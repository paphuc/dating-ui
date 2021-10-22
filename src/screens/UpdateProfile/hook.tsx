import React, { useState, useEffect } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../navigation/types'
import { IUser, UserUpdateProps } from '../../interfaces'
import { RouteProp } from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker';
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
  const dispatch = useDispatch()

  const [imageArr, setImageArr] = useState<string[]>([])

  const [user, setUser] = useState<IUser | null | undefined>(
    props?.route.params?.item
  )

  const [ info, setInfo] = useState({
    name: user?.name || '',
    gender: user?.gender || '',
    birthday: user?.birthday || '',
    country: user?.country || '',
    hobby: user?.hobby || [],
    relationship: user?.relationship || '',
    lookingFor: user?.looking_for || '',
    sex: user?.sex || '',
    about: user?.about || '',
  })

  const update = useSelector((value: any) => value.updateUser)

  useEffect(() => {
    ;(async () => {

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

  const pickImage = async (index: number) => {
    console.log(index);
    
    if (imageArr.length >= 9) {
      Alert.alert('Notification', 'Max number picture 9', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed',index),
          style: 'cancel',
        },
      ])
      return
    }
    let result = await ImagePicker.openPicker({
      cropping: true,
    })
    if (result) {
      const localUri = result.path
      const filename = localUri.split('/').pop()
      if (filename) {
        const dataPicture = JSON.parse(
          JSON.stringify({
            uri: localUri,
            name: filename,
            type: result.mime
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

  const setNameHandler = (value: string) => {
    setInfo(prevInfo => ({
      ...prevInfo,
      name: value
    }))
  }
  const setGenderHandler = (value: string) => {
    setInfo(prevInfo => ({
      ...prevInfo,
      gender: value
    }))
  }
  const setBirthdayHandler = (value: Date) => {
    setInfo(prevInfo => ({
      ...prevInfo,
      birthday: value
    }))
  }
  const setCountryHandler = (value: string) => {
    setInfo(prevInfo => ({
      ...prevInfo,
      country: value
    }))
  }
  const setRelationshipHandler = (value: string) => {
    setInfo(prevInfo => ({
      ...prevInfo,
      relationship: value
    }))
  }
  const setLookingForHandler = (value: string) => {
    setInfo(prevInfo => ({
      ...prevInfo,
      lookingFor: value
    }))
  }
  const setSexHandler = (value: string) => {
    setInfo(prevInfo => ({
      ...prevInfo,
      sex: value
    }))
  }
  const setAboutHandler = (value: string) => {
    setInfo(prevInfo => ({
      ...prevInfo,
      about: value
    }))
  }
  const setHobbyHandler = (value: string) => {
    setInfo(prevInfo => ({
      ...prevInfo,
      hobby: value.split(',')?.map(item => item.trim()) || []
    }))
  }

  const updateHandler = async () => {
    if (user) {
      const userUpdate: UserUpdateProps = {
        _id: user._id,
        name: info.name,
        birthday: info.birthday,
        gender: info.gender,
        media: imageArr,
        country: info.country,
        hobby: info.hobby,
        sex: info.sex,
        about: info.about,
        looking_for: info.lookingFor,
        relationship: info.relationship,
      }
      await dispatch(Actions.update(userUpdate))
      dispatch(ActionsAuth.getMe(user._id))
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
