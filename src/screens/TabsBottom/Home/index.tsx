import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Input, Button, Image, Text, Avatar } from 'react-native-elements'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeParamList } from '../../../navigation/types'
import Layout from '../../../constants/Layout'
import useHook from './hook'
import styles from './style'
import UserCard from '../../../components/UserCard'

type HomeScreenRouteProp = RouteProp<HomeParamList, 'Home'>
type HomeScreenNavigationProp = StackNavigationProp<HomeParamList, 'Home'>

type Props = {
  route: HomeScreenRouteProp
  navigation: HomeScreenNavigationProp
}

export default function HomeScreen({ route, navigation }: Props) {
  const { UserStore, users, handleRefresh, State, handleLike } = useHook()

  //Run once in init
  useEffect(() => {
    handleRefresh()
  }, [])

  return (
    <View style={styles.Container}>
      <FlatList
        contentContainerStyle={{ padding: 10, backgroundColor: 'white' }}
        data={users}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 0.5,
              backgroundColor: 'white',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <UserCard
              key={index}
              data={item}
              navigation={navigation}
              onPress={() => {
                handleLike(item._id)
              }}
            />
          </View>
        )}
        numColumns={2}
        onRefresh={() => handleRefresh()}
        refreshing={UserStore.isLoading}
      />
    </View>
  )
}
