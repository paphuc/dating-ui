import React, { useState, useEffect } from 'react'
import { View, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { Text, Avatar, Chip } from 'react-native-elements'
import IconButton from '../../components/IconButton'
import SkeletonImage from '../../components/SkeletonImage'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { getAge } from '../../common/Utils'
import useHook from './hook'
import styles from './styles'
import Colors from '../../constants/Colors'
import { ModelParamList, UserDetailParamList } from '../../navigation/types'
import Container from '../../components/Container'
import { FontAwesome5 as Icon } from '@expo/vector-icons'
interface Props {
  route: RouteProp<any, 'UserDetail'>
  navigation: StackNavigationProp<ModelParamList, 'UserDetail'>
}

export default function UserDetailScreen({ route, navigation }: Props) {
  const { currentUser, setCurrentUser, handleLike, handleUnlike } = useHook()
  const [open, isOpen] = useState(0)

  useEffect(() => {
    setCurrentUser(route.params?.currentUser)
  }, [])

  return (
    <Container>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            position: 'absolute',
            left: 10,
            top: 10,
            padding: 10,
            zIndex: 5,
          }}
          onPress={() => {
            console.log('back')
            navigation.goBack()
          }}
        >
          <Icon name={'chevron-left'} size={20} color={'white'} />
        </TouchableOpacity>
        <FlatList
          contentContainerStyle={styles.ImageContainer}
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
        
        <View style={styles.FloatContainer}>
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
              <Text
                style={[styles.Hobby, { color: Colors.Rainbows[index % 7] }]}
              >{`#${item} `}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
            horizontal
          />
          <Text style={styles.About}> {currentUser.about} </Text>
        </View>
      </View>
    </Container>
  )
}
