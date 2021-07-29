import React from 'react'
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native'
import {
  Image,
  Button,
} from 'react-native-elements'
import DateTimePicker, {
  WindowsDatePickerChangeEvent,
} from '@react-native-community/datetimepicker'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./style"
interface DatePickerProps {
  birthday?: Date
  onChange?: (value: string) => void
}

export default function DatePicker({
  birthday,
  onChange
}: DatePickerProps) {
  const [date, setDate] = React.useState(
    new Date(birthday ? birthday : '')
  )
  const [show, setShow] = React.useState(false)

  const onChangeInElement = (
    event: any,
    selectedDate: any
  ) => {
    if(onChange){
        onChange(selectedDate?.toJSON())
    }
    const currentDate = selectedDate || date
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
  }

  const showMode = () => {
    setShow(true)
  }

  return (
    <View>
     <View>
        <Text style={styles.Title}>Birthday</Text>
      </View>
      <View style={{
            flexDirection: "row",
            // flexWrap: "wrap",
            justifyContent: "space-around",
            alignItems: "center"
            
        }} >
        <View>
        <Text style={{
            fontSize: 20
        }}> {date?.getDate()}/{date?.getMonth()}/{date?.getFullYear()} </Text>
        </View>
        <Button
          onPress={showMode}
          buttonStyle={{ width:100}}
          title='change'
        />
      </View>
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode='date'
          is24Hour={true}
          display='default'
          onChange={onChangeInElement}
        />
      )}
    </View>
  )
}
