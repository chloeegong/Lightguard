import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, wrap, TouchableOpacity } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import HazardPage from "./HazardPage";
import SchedulePath from "./SchedulePath";
import SavedPaths from "./SavedPathsPage";
import PathSummary from "./PathSummaryPage";
import ProfilePage from "./ProfilePage";

//Creates the StackNavigator, which allows us to add screens in the stack and navigate to other screens
const Stack = createStackNavigator();

//This function adds all the screens in our app to our stack navigator
function MyStack() {
  return (
    //This is a function for our Stack we made earlier, we are adding screens such as LoginPage, SignUpPage, and HazardPage
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SchedulePath"
        component={SchedulePath}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SavedPaths"
        component={SavedPaths}
        options={{ headerShown: false }}
      />
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
        name="PathSummary"
        component={PathSummary}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

//This is what our app returns when it runs
export default function App() {
  return (
    //NavigationContainer, is a container with our Stack of pages inside of it
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
