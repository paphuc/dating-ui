import React from 'react'
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native'
import { ListItem, Avatar, Text, Image } from 'react-native-elements'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import InboxItem from '../../../components/InboxItem'
import UserAvatar from '../../../components/UserAvatar'
import { IUser } from '../../../interfaces'
import styles from './style'
import useHook, { PropsInterface } from './hook'
import { getThumbnailLink } from '../../../common/Utils'

export default function InboxScreens({ navigation }: PropsInterface) {
  const {
    Matched,
    matches,
    rooms,
    AuthUser,
    handleNavigate,
    handleConversationRefresh,
    handleMatchedRefresh,
    Room,
  } = useHook({
    navigation,
  })

  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.Header}>Ghép đôi</Text>
        <FlatList
          contentContainerStyle={{ margin: 10 }}
          data={matches}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <UserAvatar
              source={getThumbnailLink(item.media[0], 'large')}
              name={item.name}
            />
          )}
          onRefresh={() => handleMatchedRefresh()}
          refreshing={Matched.isLoading}
          horizontal
        />
        <Divider style={{ margin: 10 }} />
      </View>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text style={styles.Header}>Trò chuyện</Text>
        <FlatList
          style={{ flex: 1, backgroundColor: 'white' }}
          data={rooms}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <InboxItem
              onPress={() => handleNavigate(item)}
              key={index}
              userID={AuthUser._id}
              room={item}
            />
          )}
          onRefresh={() => handleConversationRefresh()}
          refreshing={Room.isLoading}
        />
      </View>
    </View>
  )
}
