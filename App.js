import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import allReducer from "./src/reducers";
import { MainStack } from "./Routes";

const store = createStore(allReducer, applyMiddleware(ReduxThunk));
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>PocketLawyer!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
