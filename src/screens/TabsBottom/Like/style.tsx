import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  HeaderContainer: {
    paddingTop: 0,
    borderTopWidth: 0,
    borderWidth: 0,
  },
  CardContainer: {
    margin: 5,
    flex: 1,
    alignItems: "center",
  },
  InfoContainer: {
    position: "absolute",
    margin: 5,
    bottom: 0,
    flex: 1,
  },
  Text: {
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "black",
  },
});
