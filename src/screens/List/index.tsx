import { StackNavigationProp } from "@react-navigation/stack";
import * as React from "react";
import {
  SafeAreaView,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Image, Text, Header, Avatar, Chip } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { RootStackParamList } from "../../../types";
import styles from "./style";

interface UserProps {
  name: string;
  email: string;
  media: string[];
  age: number;
  gender: string;
  sex: string;
  country: string;
  hobby: string[];
  about: string;
  like_id: string[];
  match_id: string[];
  lookingFor: string;
  relationship: string;
}
interface ItemProps {
  icon: string;
  content: string;
}
const userEx = {
  name: "Nguyen Van Cat",
  email: "a@gmail.com",
  media: [
    "https://s1.img.yan.vn/YanNews/2167221/201603/20160310-124800-1_600x450.jpg",
    "https://s1.img.yan.vn/YanNews/2167221/201603/20160310-124800-1_600x450.jpg",
    "https://s1.img.yan.vn/YanNews/2167221/201603/20160310-124800-1_600x450.jpg",
    "https://s1.img.yan.vn/YanNews/2167221/201603/20160310-124800-1_600x450.jpg",
    "https://s1.img.yan.vn/YanNews/2167221/201603/20160310-124800-1_600x450.jpg",
    "https://s1.img.yan.vn/YanNews/2167221/201603/20160310-124800-1_600x450.jpg",
    "https://s1.img.yan.vn/YanNews/2167221/201603/20160310-124800-1_600x450.jpg",
    "https://s1.img.yan.vn/YanNews/2167221/201603/20160310-124800-1_600x450.jpg",
    "https://s1.img.yan.vn/YanNews/2167221/201603/20160310-124800-1_600x450.jpg",
  ],
  age: 20,
  gender: "male",
  sex: "BD",
  country: "Chau A",
  hobby: ["Work", "Learn", "Kiss", "Sleepingggggggggggggg", "Pate"],
  about:
    "Động vật có vú, nhỏ nhắn và chuyên ăn thịt, sống chung với loài người, được nuôi để săn vật gây hại hoặc làm thú nuôi cùng với chó nhà.",
  like_id: [],
  match_id: [],
  lookingFor: "Baby Cat",
  relationship: "FA",
};
type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, "Root">;

type Props = {
  navigation: ListScreenNavigationProp;
};
export default function ListScreen({ navigation }: Props) {
  const userEx1 = { ...userEx, name: "hi" };
  const [user, setUser] = React.useState<UserProps[]>([
    userEx,
    userEx1,
    userEx,
    userEx,
    userEx,
    userEx,
    userEx,
    userEx,
    userEx,
    userEx,
  ]);
  const getFooter = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>{"Loading..."}</Text>
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <Header
        barStyle={"default"}
        elevated={false}
        containerStyle={styles.HeaderContainer}
        backgroundColor="#E5E5E5"
        placement="center"
        leftComponent={
          <Icon
            name="arrow-left"
            size={24}
            style={{ marginLeft: 20 }}
            color={"#56BBFF"}
          />
        }
        centerComponent={
          <View style={{ flexDirection: "row" }}>
            <Text>Choose one to next </Text>
          </View>
        }
      />
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          ListFooterComponent={getFooter}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          data={user}
          ListEmptyComponent={null}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View key={item} style={styles.CardContainer}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("BottomTab", {
                      screen: "Home",
                      params: {
                        screen: "HomeScreen",
                        params: { item: item },
                      },
                    });
                  }}
                >
                  <Image
                    source={{ uri: item.media[0] }}
                    style={{ width: 165, height: 165, borderRadius: 10 }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                  <View style={styles.InfoContainer}>
                    <Text style={styles.Text}>{item.name}</Text>
                    <Text style={styles.Text}>
                      {item.age} - {item.gender}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
}
