import React, { useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import { UserProps } from "../../interfaces";
import Actions from "../../redux/actions/auth";

import { useSelector, useDispatch } from "react-redux";
import API from "../../common/Api";

type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, "Root">;

export type PropsInterface = {
  navigation: ListScreenNavigationProp;
};

export default function Hook(props: PropsInterface) {
  const [userList, setUserList] = useState<UserProps[]>([]);

  const state = useSelector((value: any) => value.authStore);

  const handleNavigate = (item: UserProps) => {
    props.navigation.navigate("BottomTab", {
      screen: "Home",
      params: {
        screen: "HomeScreen",
        params: { item: item },
      },
    });
  };

  useEffect(() => {
    API.get("/users").then(({ data }) => {
      setUserList(data.listUsers);
    });
  }, [state]);

  return {
    userList,
    handleNavigate,
  };
}
