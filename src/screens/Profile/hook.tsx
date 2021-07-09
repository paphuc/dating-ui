import React, { useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import jwt_decode from "jwt-decode";
import { RootStackParamList } from "../../navigation/types";
import { JwtProps, UserProps } from "../../interfaces";
import { useSelector, useDispatch } from "react-redux";
import API from "../../common/Api";

type ListScreenNavigationProp = StackNavigationProp<RootStackParamList, "Root">;

export type PropsInterface = {
  navigation: ListScreenNavigationProp;
};

export default function Hook(props?: PropsInterface) {
  const [user, setUser] = useState<UserProps | null>(null);

  const state = useSelector((value: any) => value.authStore);

  useEffect(() => {
    if (state.isLogged) {
      var decodedHeader: JwtProps = jwt_decode(state.token);
      API.get("/users/" + decodedHeader?._id).then(({ data }) => {
        setUser(data);
      });
    }
  }, [state]);

  return {
    user,
  };
}
