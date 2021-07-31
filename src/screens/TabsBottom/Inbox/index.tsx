import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native'
import useHook, { PropsInterface } from './hook'
import InboxItem from '../../../components/InboxItem'

export default function InboxScreens({ navigation }: PropsInterface) {
  const { listRooms, userID, handleNavigate, onRefresh, isFetching } = useHook({
    navigation,
  })

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>INBOX</Text>

      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          onRefresh={onRefresh}
          refreshing={isFetching}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          data={listRooms.reverse()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={{
                  marginVertical: 6,
                }}
                key={index}
                onPress={() => handleNavigate(item)}
              >
                <InboxItem room={item} userID={userID} />
              </TouchableOpacity>
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
}
