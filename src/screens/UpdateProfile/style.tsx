import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  ContainerFlex: {
    flex: 1,
  },
  MediaContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  ViewContainerImage: {
    width: 125,
    height: 150,
    margin: 5,
    borderRadius: 10,
  },
  DelButtonContainer: {
    position: 'absolute',
    right: 0,
  },
  PickButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  PickButton: {
    width: 300,
    borderRadius: 30,
  },
})
