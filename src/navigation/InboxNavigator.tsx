import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { InboxScreens } from "../screens/TabsBottom";
import { InboxParamList } from "./types";

const InboxStack = createStackNavigator<InboxParamList>();

export default function TabInboxNavigator() {
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
