import AsyncStorage from "@react-native-async-storage/async-storage";
import constants from "../constants/userList";
import { UserProps } from "../../interfaces";

interface initProps {
  isList: boolean;
  totalItems: number | undefined;
  totalPages: number | undefined;
  currentPage: number | undefined;
  maxItemsPerPage: number | undefined;
  listUsers: UserProps[] | undefined;
}

const initState: initProps = {
  isList: false,
  totalItems: undefined,
  totalPages: undefined,
  currentPage: undefined,
  maxItemsPerPage: undefined,
  listUsers: undefined,
};

interface ActionType {
  type: string;
  payload: initProps;
}

export default function authUserList(
  state: Object = initState,
  action: ActionType
) {
  switch (action.type) {
    case constants.USER_LIST: {
      return { ...action.payload, isList: true };
    }
    case constants.USER_ERROR: {
      return { isList: false, errors: action.payload };
    }
    default:
      return state;
  }
}
