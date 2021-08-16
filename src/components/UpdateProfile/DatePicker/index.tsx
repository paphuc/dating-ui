import React, {useState} from 'react'
import styles from './style'
import { InputElement } from '..'
import { 
    View,
    TouchableOpacity,
    Touchable,
    Modal,
    Platform,
} from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

export default function DatePicker(props: any) {
    const [date, setDate] = useState(props.defaultValue)
    const [show, setShow] = useState(false)

    const pickerHandler = (event: any, selectedDate: any) => {
        setDate(selectedDate || date)
        props.onChange(date)
    }

    const changeShow = () => {
        setShow(!show)
    }

    return (
        <View>
            <InputElement
            onPress={changeShow}
            title={props.title}
            defaultValue={moment(date).format('DD/MM/YYYY')}
            editable={false}/>

            {show && (
                    <Modal
                        style={styles.Modal}
                        animationType='slide'
                        visible={true}
                        transparent={true}
                    >
                        <DateTimePicker
                            value={moment(date).toDate()}
                            mode='date'
                            display='default'
                            onChange={pickerHandler}
                        />
                    </Modal>
            )}
        </View>
    )
}