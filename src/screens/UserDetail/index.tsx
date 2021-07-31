import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import { Input, Button, Image, Text, Avatar, Chip } from 'react-native-elements'
import IconFloatButton from '../../components/IconFloatButton'
import SkeletonImage from '../../components/SkeletonImage'
import { getAge } from '../../common/Utils'
import useHook from './hook'
import styles from './styles'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Colors from '../../constants/Colors'
import style from '../Login/style'
import { FontAwesome5 } from '@expo/vector-icons'
interface Props {
  route: any
  navigation: any
}

export default function UserDetail({ route, navigation }: Props) {
  const { currentUser, setCurrentUser, handleLike,handleUnlike} = useHook()

  useEffect(() => {
    setCurrentUser(route.params.currentUser)
  }, [])

  return (
    <View style={styles.Container}>
      <IconFloatButton
        name='arrow-left'
        containerStyle={{
          backgroundColor: 'rgba(0.5,0.5,0.5,0.3)',
          zIndex: 5,
          top: 10,
          left: 10,
        }}
        onPress={() => {
          navigation.goBack()
        }}
      />
      <ScrollView style={styles.Container}>
        <View style={styles.ImageContainer}>
          <FlatList
            data={currentUser.media}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <SkeletonImage
                layout={[styles.Image]}
                style={styles.Image}
                source={{ uri: item }}
              />
            )}
            ListEmptyComponent={
              <SkeletonImage
                layout={[styles.Image]}
                style={styles.Image}
                source={{}}
              />
            }
            horizontal={true}
            pagingEnabled
          />
        </View>
        <View style={styles.InfoContainer}>
          {route.params?.button == 'like' ? (
            <IconFloatButton
              name={'heart'}
              size={40}
              containerStyle={{
                backgroundColor: Colors.Rainbows[0],
                zIndex: 5,
                right: 15,
                top: -35,
              }}
              onPress={() => {
                handleLike(currentUser._id)
                navigation.goBack()
              }}
            />
          ) : (
            <IconFloatButton
              name={'times'}
              size={40}
              containerStyle={{
                backgroundColor: Colors.Rainbows[2],
                zIndex: 5,
                right: 15,
                top: -35,
              }}
              onPress={() => {
                handleUnlike(currentUser._id)
                navigation.goBack()
              }}
            />
          )}
          <Text style={styles.Name}>
            {currentUser.name + ', ' + getAge(currentUser.birthday)}
          </Text>
          <FlatList
            data={currentUser?.hobby}
            renderItem={({ item, index }) => (
              <Chip
                key={index}
                title={item}
                containerStyle={{ margin: 5 }}
                buttonStyle={{ backgroundColor: Colors.Rainbows[index % 7] }}
                titleStyle={{ fontSize: 16, fontWeight: 'bold' }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
          />
          <Divider />
          {currentUser.about ? (
            <Text style={styles.About}>{currentUser.about}</Text>
          ) : (
            <FontAwesome5
              name='question-circle'
              color={Colors.Grey.Medium}
              style={{ alignSelf: 'center', marginTop: 10 }}
              size={40}
            />
          )}
        </View>
      </ScrollView>
    </View>
  )
}
