import * as React from "react";
import { View, Text, Keyboard } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RecordingScreen from "./src/screens/RecordingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const tabOptions = {
  tabBarOptions: {
    activeTintColor: "black",
    inactiveTintColor: "grey",
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
    pressColor: "blue",
  },
  lazy: true,
};

export const MainStack = () => {
  return (
    <Tab.Navigator {...tabOptions} tabBarOptions={{ showIcon: true }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Feather name="home" size={24} color={tintColor} />
          ),
        }}
      />
      <Tab.Screen
        name="Recordings"
        component={RecordingScreen}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome5 name="record-vinyl" size={24} color={tintColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
