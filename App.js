import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, wrap } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./LoginPage";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
