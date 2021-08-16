import React, {useState, useEffect} from 'react'
import {
  ActivityIndicator,
  View,
  TextInput
} from 'react-native'
import {
  Image,
  Text,
} from 'react-native-elements'
import { Input } from 'react-native-elements/dist/input/Input'
import styles from './style'
export default function InputElement(props: any) {  

  return (
    <View style={styles.Container}>
      <View style={styles.TitleView}>
          <Text style={styles.Title}>{props.title}</Text>
      </View>
      <TextInput
        editable={props.editable}
        style={styles.TextInput}
        multiline={props.multiline? true : false}
        defaultValue={props.defaultValue}
        onChangeText={props.onChange}
        onTouchEnd={props.onPress}
      />
    </View>
  )
}
