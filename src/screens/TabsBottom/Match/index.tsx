import React from 'react'
import {
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { Tab, TabView, Text, Image } from 'react-native-elements'
import useHook from './hook'
import styles from './style'

export default function MatchScreens({}) {
  const { content, getAge } = useHook()

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
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            ListFooterComponent={getFooter}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            data={content}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View key={item} style={styles.CardContainer}>
                  <TouchableOpacity onPress={() => console.log(item.name)}>
                    <Image
                      source={{
                        uri: item.media[0],
                      }}
                      style={{
                        width: 165,
                        height: 204,
                        borderRadius: 10,
                      }}
                      PlaceholderContent={<ActivityIndicator />}
                    />
                    <View style={styles.InfoContainer}>
                      <Text style={styles.Text}>{item.name}</Text>
                      <Text style={styles.Text}>
                        {getAge(item.birthday)} - {item.gender}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )
            }}
          />
        </SafeAreaView>
      </View>
    </View>
  )
}
