import * as React from 'react'
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'
import {
  Image,
  Text,
  Header,
  Avatar,
  Chip,
} from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

import { UserProps } from '../../interfaces'
import useHook, { PropsInterface } from './hook'
import styles from './style'

export default function ListScreen({
  navigation,
}: PropsInterface) {
  const { handleNavigate, listUsers, getAge } =
    useHook({ navigation })

  const getFooter = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>{'Loading...'}</Text>
      </View>
    )
  }

  return (
    <View style={styles.Container}>
      <Header
        barStyle={'default'}
        elevated={false}
        containerStyle={styles.HeaderContainer}
        backgroundColor='#E5E5E5'
        placement='center'
        leftComponent={
          <Icon
            name='arrow-left'
            size={24}
            style={{ marginLeft: 20 }}
            color={'#56BBFF'}
          />
        }
        centerComponent={
          <View style={{ flexDirection: 'row' }}>
            <Text>Choose one to next </Text>
          </View>
        }
      />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          ListFooterComponent={getFooter}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          data={listUsers}
          numColumns={2}
          keyExtractor={(item, index) =>
            index.toString()
          }
          renderItem={({ item, index }) => {
            return (
              <View
                key={item}
                style={styles.CardContainer}
              >
                <TouchableOpacity
                  onPress={() =>
                    handleNavigate(item)
                  }
                >
                  <Image
                    source={{
                      uri: item.media[0],
                    }}
                    style={{
                      width: 165,
                      height: 165,
                      borderRadius: 10,
                    }}
                    PlaceholderContent={
                      <ActivityIndicator />
                    }
                  />
                  <View
                    style={styles.InfoContainer}
                  >
                    <Text style={styles.Text}>
                      {item.name}
                    </Text>
                    <Text style={styles.Text}>
                      {getAge(item.birthday)} -{' '}
                      {item.gender}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      </SafeAreaView>
    </View>
  )
}
