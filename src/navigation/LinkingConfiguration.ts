/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Register: "Register",
          Login: "Login",
          List: "List",
          BottomTab: {
            screens: {
              Home: {
                HomeScreen: "HomeScreen",
              },
              Me: {
                MeScreen: "MeScreen",
              },
            },
          },
        },
        // screens: {
        //   TabOne: {
        //     screens: {
        //       TabOneScreen: 'one',
        //     },
        //   },
        //   TabTwo: {
        //     screens: {
        //       TabTwoScreen: 'two',
        //     },
        //   },
        // },
      },
      NotFound: "*",
    },
  },
};
