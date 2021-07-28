import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import { Input, Button, Image, Text, Avatar, Chip } from 'react-native-elements'
import IconButton from '../../components/IconButton'
import IconFloatButton from '../../components/IconFloatButton'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import SkeletonContent from 'react-native-skeleton-content'
import { getAge } from '../../common/Utils'
import useHook from './hook'
import styles from './styles'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const Colors = [
  '#FF9AA2',
  '#FFB7B2',
  '#FFDAC1',
  '#E2F0CB',
  '#B5EAD7',
  '#C7CEEA',
]

export default function UserDetail({ route, navigation }: any) {
  const { currentUser, setCurrentUser } = useHook()

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
          <SkeletonContent
            containerStyle={styles.ImageContainer}
            isLoading={true}
            layout={[styles.Image]}
          ></SkeletonContent>
        </View>
        <View style={styles.InfoContainer}>
          <Text style={styles.Name}>
            {currentUser.name + ', ' + getAge(currentUser.birthday)}
          </Text>
          <FlatList
            data={currentUser?.hobby}
            renderItem={({ item, index }) => (
              <Chip
                title={item}
                containerStyle={{ margin: 5 }}
                buttonStyle={{ backgroundColor: Colors[index % 7] }}
                titleStyle={{ fontSize: 16, fontWeight: 'bold' }}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
          />
          <Divider />
          <Text style={styles.About}>
            {currentUser.about || "Find someone who doesn't have a dick"}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.ButtonContainer}>
        <IconButton
          name={'times'}
          size={30}
          containerStyle={{
            backgroundColor: '#F6AE99',
          }}
        />
        <IconButton
          name={'heart'}
          size={30}
          containerStyle={{
            backgroundColor: '#F38BA0',
          }}
        />
      </View>
    </View>
  )
}
