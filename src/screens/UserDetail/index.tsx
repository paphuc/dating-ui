import React, { useEffect } from 'react'
import { View, FlatList, ScrollView } from 'react-native'
import { Text, Avatar, Chip } from 'react-native-elements'
import IconButton from '../../components/IconButton'

import SkeletonImage from '../../components/SkeletonImage'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { getAge } from '../../common/Utils'
import useHook from './hook'
import styles from './styles'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Colors from '../../constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { ModelParamList, UserDetailParamList } from '../../navigation/types'
import Container from '../../components/Container'
interface Props {
  route: RouteProp<any, 'UserDetail'>
  navigation: StackNavigationProp<ModelParamList, 'UserDetail'>
}

export default function UserDetailScreen({ route, navigation }: Props) {
  const { currentUser, setCurrentUser, handleLike, handleUnlike } = useHook()

  useEffect(() => {
    setCurrentUser(route.params?.currentUser)
  }, [])

  return (
    <Container>
      <ScrollView style={styles.Container}>
        <IconButton
          name={'arrow-left'}
          size={15}
          colors={['rgba(1,1,1,0)','rgba(1,1,1,0)']}
          containerStyle={{
            position: 'absolute',
            left: 10,
            top: 10,
            zIndex: 5,
          }}
          onPress={() => {
            console.log('back')
            navigation.goBack()
          }}
        />
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
            <IconButton
              name={'heart'}
              size={40}
              colors={Colors.MainBlueGradient}
              containerStyle={{
                position: 'absolute',
                right: 15,
                top: -35,
              }}
              onPress={() => {
                handleLike(currentUser._id)
                navigation.goBack()
              }}
            />
          ) : (
            <IconButton
              name={'times'}
              size={40}
              colors={Colors.OrangeGradient}
              containerStyle={{
                position: 'absolute',
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
          <Text style={styles.About}>{currentUser?.about}</Text>
        </View>
      </ScrollView>
    </Container>
  )
}
