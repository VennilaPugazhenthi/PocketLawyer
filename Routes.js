import * as React from "react";
import { View, Text, Keyboard } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import RecordingScreen from "./src/screens/RecordingScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconColor;
          if (route.name === "Home") {
            iconColor = focused ? "#4287f5" : "grey";
            return <Feather name="home" size={24} color={iconColor} />;
          }
          if (route.name === "Recordings") {
            iconColor = focused ? "#4287f5" : "grey";
            return (
              <FontAwesome5 name="record-vinyl" size={24} color={iconColor} />
            );
          }
        },
      })}
      tabBarOptions={{
        showIcon: true,
        activeTintColor: "#4287f5",
        inactiveTintColor: "grey",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Recordings" component={RecordingScreen} />
    </Tab.Navigator>
  );
};
