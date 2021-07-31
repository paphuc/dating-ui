import React, { useEffect } from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { Text, Image } from 'react-native-elements'
import UserLikedCard from '../../../components/UserLikedCard'
import useHook from './hook'
import styles from './style'

export default function LikeScreens({ route, navigation }: any) {
  const { Store, users, handleRefresh, handleUnlike } = useHook()

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
            <UserLikedCard
              key={index}
              data={item}
              navigation={navigation}
              onPress={() => handleUnlike(item._id)}
            />
          </View>
        )}
        numColumns={2}
        onRefresh={() => handleRefresh()}
        refreshing={Store.isLoading}
      />
    </View>
  )
}
