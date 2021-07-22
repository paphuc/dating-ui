import React, { useState, useEffect } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import jwt_decode from "jwt-decode";
import { RootStackParamList } from "../../../navigation/types";
import { JwtProps, UserProps } from "../../../interfaces";
import { useSelector, useDispatch } from "react-redux";
import Actions, { DispatchType } from "../../../redux/actions/matchedList";
import { ApplicationState } from "../../../redux/reducers";

import API from "../../../common/Api";

export default function Hook() {
  const [user, setUser] = useState<UserProps | null>(null);

  const state = useSelector((value: any) => value.authStore);
  const { matchedList } = useSelector((state: any) => state.matchedListStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.isLogged) {
      var decodedHeader: JwtProps = jwt_decode(state.token);
      dispatch(Actions.getListLiked(decodedHeader?._id));
    }
  }, [state]);

  const getAge = (age: string): string => {
    return (new Date().getFullYear() - new Date(age).getFullYear()).toString();
  };
  return {
    getAge,
    matchedList,
  };
}