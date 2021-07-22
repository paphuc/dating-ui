import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/TabsBottom";
import { HomeParamList } from "./types";


const HomeStack = createStackNavigator<HomeParamList>();

export default function TabHomeNavigator() {
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
