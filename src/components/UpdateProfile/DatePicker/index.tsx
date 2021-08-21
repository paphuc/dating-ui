import React, { useState } from 'react'
import styles from './style'
import {
    View,
    TouchableOpacity,
    Modal,
    Platform,
    Text,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

interface IDatePicker {
    title: string
    defaultValue: Date  | undefined
    onChange: (value: Date) => void
}

interface ICustomedPicker {
    isIOS: boolean
    date: Date
    pickerHandler: (event: any, selectedDate: any) => void
}

const CustomedPicker = (props: ICustomedPicker) => {
    return (
        <View style={styles.DatePickerContainer}>
            <DateTimePicker
                style={styles.DatePicker}
                value={moment(props.date).toDate()}
                mode='date'
                display={props.isIOS ? 'spinner' : 'default'}
                onChange={props.pickerHandler}
                textColor='black'
            />
        </View>
    )
}

export default function DatePicker(props: IDatePicker) {
    const [date, setDate] = useState(props.defaultValue || new Date())
    const [show, setShow] = useState(false)
    const isIOS = Platform.OS === 'ios'

    const pickerHandler = (event: Event, selectedDate: Date) => {
        setDate(selectedDate)
        props.onChange(selectedDate)
        !isIOS ? changeShow : null
    }

    const changeShow = () => {
        setShow(!show)
    }


    return (
        <View style={styles.Container}>
            <View style={styles.TitleView}>
                <Text style={styles.Title}>{props.title}</Text>
                <TouchableOpacity onPress={changeShow}>
                    <View style={styles.InputContainer}>
                        <Text style={styles.InputValue}>{moment(date).format('DD/MM/YYYY')}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            
            {isIOS ?
                <Modal
                    style={styles.Modal}
                    animationType='slide'
                    visible={show}
                    transparent={true}
                >
                    <TouchableOpacity
                        onPressOut={changeShow}
                    >
                        <CustomedPicker
                            isIOS={isIOS}
                            date={date}
                            pickerHandler={pickerHandler}
                        />
                    </TouchableOpacity>
                </Modal> :
                (show && (
                    <CustomedPicker
                    isIOS={isIOS}
                    date={date}
                    pickerHandler={pickerHandler}
                    />
                )) 
                
            }

        </View>
    )
}