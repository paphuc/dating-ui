import * as React from 'react'
import { View, FlatList } from 'react-native'
import {
  Input,
  Button,
  Image,
  Text,
  Avatar,
} from 'react-native-elements'
import {
  useDispatch,
  useSelector,
} from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeParamList } from '../../../navigation/types'
import Layout from '../../../constants/Layout'
import useHook from './hook'
import styles from './style'
import UserCard from '../../../components/skeletons/UserCard'

type ProfileScreenRouteProp = RouteProp<
  HomeParamList,
  'HomeScreen'
>
type ProfileScreenNavigationProp =
  StackNavigationProp<HomeParamList, 'HomeScreen'>

type Props = {
  route: ProfileScreenRouteProp
  navigation: ProfileScreenNavigationProp
}

export default function HomeScreen({
  route,
  navigation,
}: Props) {
  const item = route.params?.item
  const { getAge } = useHook()
  const user = useSelector(
    (value: any) => value.authStore
  )
  const dispatch = useDispatch()
  return (
    <View style={styles.Container}>
      <FlatList
        data={[
          1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        ]}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={(e) => (
          <View
            key={e.index}
            style={{
              backgroundColor: 'white',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <UserCard />
          </View>
        )}
        numColumns={2}
      />
    </View>
  )
}

/*
      <View style={styles.Card}>
        {/* overlay picture
        <View style={styles.OverlayContainer}>
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
              {item?.media.map((e, i) => (
                <View key={i} style={{ flex: 1, width: Layout.window.width }}>
                  <TouchableOpacity
                    onPress={() => console.log("click view Profile user")}
                  >
                    <Image
                      source={{ uri: e }}
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: 5,
                      }}
                      PlaceholderContent={<ActivityIndicator />}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </View>
        <View style={styles.OverlayInfoContainer}>
          <View style={{ margin: 20 }}>
            <Text style={styles.TextInfo}>{item?.name}</Text>
            <Text style={styles.TextInfo}>
              {item ? getAge(item?.birthday.toString()) : ""} - {item?.gender}
            </Text>
          </View>
          <View style={{ margin: 8, alignItems: "flex-end" }}>
      </View>*/
