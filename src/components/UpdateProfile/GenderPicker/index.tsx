import React from 'react'
import {
  ScrollView,
  Text,
  View,
} from 'react-native'
import { Button } from 'react-native-elements'
import { Picker } from '@react-native-picker/picker'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style'
type GendersType = 'Male' | 'Female' | 'Other'

interface GenderPickerProps {
  gender: string | GendersType
  onChange?: (value: string) => void
}

export default function GenderPicker({
  gender,
  onChange,
}: GenderPickerProps) {
  const [genderPicker, setGenderPicker] =
    React.useState<string | GendersType>(gender)

  return (
    <View>
      <View>
        <Text style={styles.Title}>Gender</Text>
      </View>
      <Picker
        style={{ width: '100%', height: 44 }}
        itemStyle={{ height: 44 }}
        mode='dropdown'
        selectedValue={genderPicker}
        onValueChange={(itemValue, itemIndex) => {
          setGenderPicker(itemValue)
          if (onChange) {
            onChange(itemValue)
          }
        }}
      >
        <Picker.Item label='Male' value='Male' />
        <Picker.Item
          label='Female'
          value='Female'
        />
        <Picker.Item
          label='Other'
          value='Other'
        />
      </Picker>
    </View>
  )
}
