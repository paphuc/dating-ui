import React, { useEffect, useRef, useState } from 'react'
import {
    View,
    TouchableOpacity,
} from 'react-native'
import { Input, Button, Text, Image, SocialIcon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style'
import Colors from '../../../constants/Colors'
import { ActivityIndicator } from 'react-native'

export default function AvatarPicker(props: any) {
    const [avatar, setAvatar] = useState(props.imageUrl)
    const isLoading = avatar === 'loading' || avatar === undefined ? true : false

    useEffect(() => {
        setAvatar(props.imageUrl);
    }, [props.imageUrl])

    return (
        <View style={styles.TouchableView}>
            <TouchableOpacity onPress={props.onClick}>
                {isLoading ?
                    <View style={styles.ImageContainer}>
                        <View style={styles.EmptyImage}>
                            <ActivityIndicator size='large' color={Colors.light.tint} style={styles.Indicator}/>
                        </View>
                    </View>
                    :
                    <View>
                        <View style={styles.ImageContainer}>
                            <Image 
                            resizeMode={'cover'}
                            source={{uri: avatar}}
                            style={styles.Image}/>
                        </View>
                        <View style={styles.EditView}>
                            <View style={styles.EditCircle}>
                                <Icon name='pencil' size={20} style={styles.Icon} />
                            </View>
                        </View>
                    </View>
                }                
            </TouchableOpacity>
        </View>
    )
}