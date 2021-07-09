import * as React from "react";
import { View, ActivityIndicator, Button } from "react-native";
import { Image, Text, Header, Avatar, Chip } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import useHook from "./hook";
import AuthActions from "../../redux/actions/auth";
import styles from "./style";

interface ItemProps {
  icon: string;
  content: string;
}

export default function ProfileScreen({}) {
  const dispatch = useDispatch();
  const { user } = useHook();
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
            source={{ uri: user?.media[0] }}
            title={user?.name}
          />
          <Text
            style={{
              marginTop: 10,
              fontSize: 20,
              color: "#204761",
            }}
          >
            {user?.name}, {user?.age} - {user?.gender}
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
            {user?.hobby.map((h, i) => {
              return (
                <View style={{ margin: 5 }} key={i}>
                  <Chip titleStyle={{ fontSize: 10 }} title={h} />
                </View>
              );
            })}
          </View>
          <InfoItem icon="map-marker" content={user ? user.country : ""} />
          <InfoItem icon="genderless" content={"Sexsual: " + user?.sex} />
          <InfoItem
            icon="genderless"
            content={"Status: " + user?.relationship}
          />
          <InfoItem
            icon="genderless"
            content={"Looking For: " + user?.lookingFor}
          />
          {/* About */}
          <View
            style={{
              margin: 20,
            }}
          >
            <Text>{user?.about}</Text>
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
          data={user?.media}
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
              <View style={styles.CardListImageContainer}>
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
      <View>
        <Button title="Logout" onPress={() => dispatch(AuthActions.logout())} />
      </View>
    </View>
  );
}
