/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import {
  HomeScreen,
  ProfileScreen,
  LikeScreens,
  InboxScreens,
  MatchScreens,
} from "../screens/TabsBottom";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Layout from "../constants/Layout";
import {
  BottomTabParamList,
  HomeParamList,
  LikeTabParamList,
  InboxParamList,
  ProfileParamList,
  LikeTabScreensParamList,
} from "./types";
import { View } from "react-native";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="heart-circle-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Like"
        component={TabLikeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="contrast" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Inbox"
        component={TabInboxNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="chatbubbles" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TopTabLikedScreen =
  createMaterialTopTabNavigator<LikeTabScreensParamList>();

function LikeTabScreens() {
  return (
    <View style={{ flex: 1 }}>
      <TopTabLikedScreen.Navigator
        initialRouteName="Like"
        tabBarOptions={{
          tabStyle: {
            borderRadius: 20,
            margin: 2,
            justifyContent: "center",
            alignItems: "center",
          },
          labelStyle: { fontSize: 15 },
          contentContainerStyle: { justifyContent: "center" },
          activeTintColor: "#56BBFF",
          inactiveTintColor: "silver",
          indicatorStyle: {
            width: Layout.window.width / 4,
            left: (Layout.window.width / 2 - Layout.window.width / 4) / 2,
          },
          style: { margin: 20, borderRadius: 20 },
        }}
      >
        <TopTabLikedScreen.Screen name="Like" component={LikeScreens} />
        <TopTabLikedScreen.Screen name="Match" component={MatchScreens} />
      </TopTabLikedScreen.Navigator>
    </View>
  );
}
// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function TabHomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home", headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
const LikeStack = createStackNavigator<LikeTabParamList>();

function TabLikeNavigator() {
  return (
    <LikeStack.Navigator>
      <LikeStack.Screen
        name="LikeTabScreens"
        component={LikeTabScreens}
        options={{ headerTitle: "Me", headerShown: false }}
      />
    </LikeStack.Navigator>
  );
}
const InboxStack = createStackNavigator<InboxParamList>();

function TabInboxNavigator() {
  return (
    <InboxStack.Navigator>
      <InboxStack.Screen
        name="InboxScreen"
        component={InboxScreens}
        options={{ headerTitle: "Inbox", headerShown: false }}
      />
    </InboxStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function TabProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: "Me", headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}
