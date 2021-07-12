import React, { useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import { UserProps } from "../../interfaces";
import { useSelector, useDispatch } from "react-redux";

import Actions from "../../redux/actions/userList";


type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, "List">;

export type PropsInterface = {
  navigation: ListScreenNavigationProp;
};

export default function Hook(props: PropsInterface) {

  const { listUsers } = useSelector((value: any) => value.userListStore);
  const dispatch = useDispatch()

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
    dispatch(Actions.getList())
  }, []);

  return {
    listUsers,
    handleNavigate,
  };
}
