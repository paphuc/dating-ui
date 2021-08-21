import React, { useState } from 'react'
import styles from './style'
import {
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal,
    Text,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'

interface IWheelPicker {
    title: string
    defaultValue: string | undefined
    options: Array<string>
    onChange: (value: string) => void
}

export default function WheelPicker(props: IWheelPicker) {
    const [value, setValue] = useState(props.defaultValue ? props.defaultValue : '')
    const [show, setShow] = useState(false)

    const changeShow = () => {
        setShow(!show)
    }

    const handlePicker = (itemValue: any, itemIndex: any) => {
        setValue(itemValue)
        props.onChange(itemValue)
    }

    return (
        <View style={styles.Container}>
            <View style={styles.TitleView}>
                <Text style={styles.Title}>{props.title}</Text>
                <TouchableOpacity onPress={changeShow}>
                    <View style={styles.InputContainer}>
                        <Text 
                            style={value == '' ? styles.EmptyInputValue : styles.InputValue}
                        >{value == '' ? 'text place holder' : value}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            
            <Modal
                    style={styles.Modal}
                    animationType='slide'
                    visible={show}
                    transparent={true}
                >
                    <TouchableOpacity
                        onPressOut={changeShow}
                    >
                        <TouchableWithoutFeedback>
                            <View style={styles.PickerContainer}>
                                <Picker 
                                    style={styles.Picker}
                                    selectedValue={value}
                                    onValueChange={handlePicker}
                                >
                                    {props.options.map((option: any, index: any) => {
                                        return <Picker.Item key={index} label={option} value={option}/>
                                    })}
                                </Picker>         
                            </View>               
                        </TouchableWithoutFeedback>
                    </TouchableOpacity>
                </Modal>

        </View>
    )
}