import * as React from "react";
import { View, Text, Keyboard } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RecordingScreen from "./src/screens/RecordingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const tabOptions = {
  tabBarOptions: {
    activeTintColor: "#3D5A80",
    inactiveTintColor: "#989DA4",
    showIcon: true,
    upperCaseLabel: false,
    style: {
      backgroundColor: "white",
    },
    labelStyle: {
      fontSize: 15,
    },
    indicatorStyle: {
      backgroundColor: "black",
    },
    pressColor: "#3D5A80",
  },
  lazy: true,
};

export const MainStack = () => {
  return (
    <Tab.Navigator {...tabOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Recordings" component={RecordingScreen} />
    </Tab.Navigator>
  );
};
