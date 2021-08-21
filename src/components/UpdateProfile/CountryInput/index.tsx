import React, { useState, useEffect } from 'react'
import styles from './style'
import {
    View,
    Text
} from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country } from 'react-native-country-picker-modal'
import { onChange } from 'react-native-reanimated'

interface ICountryInput {
    title: string
    defaultValue: any
    onChange: (value: string) => void
}

export default function CountryInput(props: ICountryInput) {
    const [country, setCountry] = useState<Country>(props.defaultValue)
    const [countryCode, setCountryCode] = useState<CountryCode>(country? country.cca2 : 'VN')
    const [show, setShow] = useState(false)

    const onStart = () => {
        if (!props.defaultValue) {
            props.onChange('Vietnam')
        }
    }

    useEffect(() => {
        onStart()
    }, [])

    const handleSelect = (country: Country) => {
        setCountryCode(country.cca2)
        setCountry(country)
        props.onChange(String(country.name))
    }

    return (
        <View style={styles.Container}>
            <View style={styles.TitleView}>
                <Text style={styles.Title}>{props.title}</Text>
            </View>
            <CountryPicker
                containerButtonStyle={styles.TextInput}
                theme={{fontSize: 20}}
                countryCode={countryCode}
                withFilter={true}
                withFlag={true}
                withCountryNameButton={true}
                visible={show}
                onSelect={handleSelect}
            />
        </View>
    )
}