import React from 'react'
import {
  View,
  TextInput
} from 'react-native'
import {
  Text,
} from 'react-native-elements'
import styles from './style'

interface IInputElement {
  title: string
  editable?: boolean
  multiline?: boolean
  defaultValue: string | undefined
  onChange: (value: string) => void
}

export default function InputElement(props: IInputElement) {  
  return (
    <View style={styles.Container}>
      <View style={styles.TitleView}>
          <Text style={styles.Title}>{props.title}</Text>
      </View>
      <TextInput
        editable={props.editable}
        style={styles.TextInput}
        multiline={props.multiline}
        defaultValue={props.defaultValue}
        onChangeText={props.onChange}
      />
    </View>
  )
}
