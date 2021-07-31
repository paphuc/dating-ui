import axios from 'axios'

import { Alert } from 'react-native'
class cloudinaryService {
  cloudName: string = 'dng1knkia'
  upload_preset: string = 'bv6mbjnj'
  constructor() {}

  updateImageCould(
    formData: FormData
  ): Promise<string> {
    formData.append(
      'upload_preset',
      this.upload_preset
    )
    formData.append('cloud_name', this.cloudName)
    const url =
      'https://api.cloudinary.com/v1_1/' +
      this.cloudName +
      '/image/upload'
    const result = axios
      .post(url, formData)
      .then((response) => {
        return response.data.url
      })
      .catch((error) => {
        Alert.alert('Failed upload image',error)
        return "error"
      })
    return result
  }
}

export default new cloudinaryService()
