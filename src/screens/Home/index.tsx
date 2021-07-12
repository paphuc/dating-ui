import * as React from "react";
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Input, Button, Image, Text, Avatar } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeParamList } from "../../navigation/types";
import Layout from "../../constants/Layout";
import styles from "./style";

type ProfileScreenRouteProp = RouteProp<HomeParamList, "HomeScreen">;

type ProfileScreenNavigationProp = StackNavigationProp<
  HomeParamList,
  "HomeScreen"
>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export default function HomeScreen({ route, navigation }: Props) {
  const item = route.params?.item;

  const user = useSelector((value: any) => value.authStore);
  const dispatch = useDispatch();
  return (
    <View style={styles.Container}>
      <View style={styles.Card}>
        {/* overlay picture */}
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
        {/* information */}
        <View style={styles.OverlayInfoContainer}>
          <View style={{ margin: 20 }}>
            <Text style={styles.TextInfo}>{item?.name}</Text>
            <Text style={styles.TextInfo}>
              {item?.age} - {item?.gender}
            </Text>
          </View>
          <View style={{ margin: 8, alignItems: "flex-end" }}>
            <Avatar
              containerStyle={styles.AvatarContainer}
              size={50}
              rounded
              source={{ uri: item?.media[0] }}
              title={item?.name}
            />
            <View style={{ flexDirection: "row", margin: 5 }}>
              <Icon name="heart-outline" size={50} color="#56BBFF" />
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Icon name="heart" size={50} color="#56BBFF" />
                <Text style={styles.Text}>
                  {item ? item.like_id.length : 0}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
