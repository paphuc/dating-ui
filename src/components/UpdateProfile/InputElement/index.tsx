import React from 'react'
import {
  ActivityIndicator,
  View,
} from 'react-native'
import {
  Image,
  Text,
} from 'react-native-elements'
import { Input } from 'react-native-elements/dist/input/Input'
import styles from './style'

interface InputElementProps {
  multiline?: boolean
  defaultValue?: string
  title: string
  onChange?: (value: string) => void
}
const InputElement = ({
  onChange,
  defaultValue,
  title,
  multiline = false,
}: InputElementProps) => {
  const [value, setValue] =
    React.useState<string>(
      defaultValue ? defaultValue : ''
    )

  return (
    <View>
      <View>
        <Text style={styles.Title}>{title}</Text>
      </View>
      <Input
        multiline
        placeholder={title}
        defaultValue={defaultValue}
        value={value}
        onChangeText={(e) => {
          setValue(e)
          if(onChange){
            onChange(e)
          }
        }}
      />
    </View>
  )
}

export default InputElement
