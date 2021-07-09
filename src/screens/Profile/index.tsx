import * as React from "react";
import { StyleSheet, View, ActivityIndicator, Animated } from "react-native";
import {
  Input,
  Image,
  Text,
  Header,
  Avatar,
  Chip,
} from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { FlatList } from "react-native-gesture-handler";
import { UserProps } from "../../../types";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./style";

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
export default function ProfileScreen({}) {
  const [user, setUser] = React.useState<UserProps>(userEx);

  const InfoItem = ({ icon, content }: ItemProps) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Icon
          name={icon}
          size={24}
          style={{ marginLeft: 20 }}
          color={"#56BBFF"}
        />
        <Text> {content}</Text>
      </View>
    );
  };

  const HeaderComponent = () => {
    return (
      <>
        <View style={{ ...styles.AvatarNameContainer }}>
          <Avatar
            containerStyle={styles.AvatarStyle}
            size={100}
            rounded
            source={{ uri: user.media[0] }}
            title={user.name}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              color: "#204761",
            }}
          >
            {user.name}, {user.age} - {user.gender}
          </Text>
        </View>
        {/* info */}
        <View>
          <View
            style={{ ...styles.CenterStyle, marginHorizontal: 20, margin: 10 }}
          >
            <Text>
              <Icon name="info-circle" size={15} color={"#56BBFF"} /> Info
            </Text>
          </View>
          {/* Hobby */}
          <View style={styles.HobbyContainer}>
            {user.hobby.map((h, i) => {
              return (
                <View style={{ margin: 5 }} key={i}>
                  <Chip titleStyle={{ fontSize: 10 }} title={h} />
                </View>
              );
            })}
          </View>
          <InfoItem icon="map-marker" content={user.country} />
          <InfoItem icon="genderless" content={"Sexsual: " + user.sex} />
          <InfoItem
            icon="genderless"
            content={"Status: " + user.relationship}
          />
          <InfoItem
            icon="genderless"
            content={"Looking For: " + user.lookingFor}
          />
          {/* About */}
          <View
            style={{
              margin: 20,
            }}
          >
            <Text>{user.about}</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.Container}>
      <Header
        barStyle={"default"}
        elevated={false}
        containerStyle={{
          paddingTop: 0,
          borderTopWidth: 0,
          borderWidth: 0,
        }}
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
            <Text>Profile </Text>
            <Icon
              onPress={() => console.log("edit profile")}
              name="edit"
              size={24}
              color={"#56BBFF"}
            />
          </View>
        }
        rightComponent={
          <View>
            <Icon
              onPress={() => console.log("setting")}
              name="cog"
              size={24}
              style={{ marginLeft: 20 }}
              color={"#56BBFF"}
            />
          </View>
        }
      />
      <View style={styles.PictureContainer}>
        <FlatList
          data={user.media}
          ListHeaderComponent={HeaderComponent}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={3}
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
          }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  margin: 5,
                  backgroundColor: "black",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item }}
                  style={{ width: 120, height: 120 }}
                  PlaceholderContent={<ActivityIndicator />}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
