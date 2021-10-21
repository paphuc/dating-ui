import React, { useEffect, useState } from 'react'
import {
    View,
    TouchableOpacity,
} from 'react-native'
import {Image} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './style'
import Colors from '../../../constants/Colors'
import { ActivityIndicator } from 'react-native'

interface IAvatarPicker {
    index: number;
    imageUrl: string
    isExist: boolean;
    onClick: (index: number) => void;
}

export default function AvatarPicker(props: IAvatarPicker) {
    const [avatar, setAvatar] = useState(props.imageUrl)
    const isLoading = avatar === 'loading' || avatar === undefined ? true : false

    useEffect(() => {
        setAvatar(props.imageUrl);
    }, [props.imageUrl])
    return (
        <View style={styles.TouchableView}>
            <TouchableOpacity onPress={()=>props.onClick(props.index)}>
                {isLoading ?
                    <View style={styles.ImageContainer}>
                        <View style={styles.EmptyImage}>
                            <ActivityIndicator size='large' color={Colors.light.tint} style={styles.Indicator}/>
                        </View>
                    </View>
                    :
                    <View>
                        <View style={styles.ImageContainer}>
                            {props.isExist?(<Image 
                            resizeMode={'cover'}
                            source={{uri: avatar}}
                            style={styles.Image}/>):(<View style={styles.Image}></View>)}
                        </View>
                        <View style={props.isExist?styles.EditView:styles.AddView}>
                            <View style={styles.EditCircle}>
                                <Icon name={props.isExist ? "remove": 'plus'} size={20} style={styles.Icon} />
                            </View>
                        </View>
                    </View>
                }                
            </TouchableOpacity>
        </View>
    )
}