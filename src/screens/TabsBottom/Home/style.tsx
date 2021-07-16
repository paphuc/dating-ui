import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
  Card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 0,
    justifyContent: "center",
    backgroundColor: "white",
  },
  Text: {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "transparent",
  },
  OverlayContainer: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 5,
  },
  OverlayInfoContainer: {
    backgroundColor: "transparent",
    flex: 0.5,
    bottom: 0,
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextInfo: {
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "black",
  },
  AvatarContainer: {
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
