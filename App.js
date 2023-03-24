import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, wrap, TouchableOpacity } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HazardPage from "./HazardPage";
import MapPage from "./MapPage";
import CallEmergServicesPage from "./CallEmergServicesPage";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Hazard"
        component={HazardPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CallEmergService"
        component={CallEmergServicesPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Map"
        component={MapPage}
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
