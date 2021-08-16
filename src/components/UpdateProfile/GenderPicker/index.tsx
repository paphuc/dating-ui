import React, {useState, useEffect} from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './style'
import Icon from 'react-native-vector-icons/FontAwesome'
import Colors from '../../../constants/Colors'

export default function GenderPicker(props: any) {
    const FEMALE = 'Female'
    const MALE = 'Male'
    const BOTH = 'Both'
    const NONE = 'None'
    const [genderState, setGenderState] = useState(props.defaultValue? props.defaultValue : NONE)
    const [iconSize, setIconSize] = useState(0)

    useEffect(() => {
        props.onChange(genderState)
    }, [genderState])


    const genderHandler = (gender : string, allowBoth : boolean) => {
        let otherGender = NONE
        gender == MALE ? otherGender = FEMALE : otherGender = MALE  
        if (genderState == BOTH) {
            setGenderState(otherGender)
        } else if (gender == genderState) {
            setGenderState(NONE)
        } else {
            if (allowBoth) {
                setGenderState(BOTH)
            } else {
                setGenderState(gender)
            }
        }
    }

    const femalePress = () => {
        genderHandler(FEMALE, props.allowBoth)
    }

    const malePress = () => {
        genderHandler(MALE, props.allowBoth)
    }
    
    return (
        <View style={styles.Container}>
            <View style={styles.TitleView}>
                <Text style={styles.Title}>{props.title}</Text>
            </View>

            <View style={styles.OptionGroup}>
                <TouchableOpacity
                    onPress={femalePress}>
                    <LinearGradient
                        colors={genderState == FEMALE || genderState == BOTH? Colors.PinkGradient : Colors.GreyGradient}
                        start={{ x: 0, y: 0.2 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.OptionView}>
                        <View 
                            onLayout={(event) => {
                                setIconSize(event.nativeEvent.layout.width * 0.6)
                            }}
                            style={styles.GenderlabelView}>
                                <Icon name='venus' size={iconSize}/>
                                <Text style={styles.GenderText}>Female</Text>
                        </View>                    
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={malePress}>
                    <LinearGradient
                        colors={genderState == MALE || genderState == BOTH? Colors.MainBlueGradient : Colors.GreyGradient}
                        start={{ x: 0, y: 0.2 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.OptionView}>
                        <View style={styles.GenderlabelView}>
                            <Icon name='mars' size={iconSize}/>
                            <Text style={styles.GenderText}>Male</Text>
                        </View>                    
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}