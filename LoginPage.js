import axios from "axios";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";

//This is our LoginPage
export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);
      navigation.navigate("Map");
    } catch (error) {
      console.error(error.response);
    }
  };

  return (
    //This view encapsulates all of our elements
    <View style={styles.container}>
      {/** This is the status bar, the bar on top of the phone that shows battery life and time*/}
      <StatusBar style="auto" />

      <View style={styles.topBotMargin} />

      <Text style={styles.titleText}>Lightguard</Text>

      <Text style={styles.subtitleText}>Log in to get started!</Text>

      {/** Input element for Login Email*/}
      <Input
        inputStyle={styles.inputText}
        containerStyle={{ width: "80%" }}
        placeholder="Email"
        leftIconContainerStyle={styles.leftIconCont}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "envelope",
        }}
        onChangeText={setEmail}
      />

      <Input
        secureTextEntry={true}
        inputStyle={styles.inputText}
        containerStyle={{ width: "80%" }}
        placeholder="Password"
        leftIconContainerStyle={styles.leftIconCont}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "lock",
        }}
        onChangeText={setPassword}
      />

      <Button
        title="Let's go! 🏃"
        buttonStyle={{
          backgroundColor: "#A4A5F0",
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => {
          handleLogin();
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />

      {/** Text element for no account, and used touchable opacity (button) to lead users to signup page*/}
      <Text
        style={{
          //position: "absolute",
          bottom: "11%",
          fontFamily: "Menlo",
          fontSize: 13,
          color: "#FFFFFF",
        }}
      />

      <Text style={styles.testLinks}>
        No account?{" "}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={{ color: "#F9CB40", textDecorationLine: "underline" }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </Text>

      <View style={styles.topBotMargin} />
    </View>
  );
}

//Stylesheet that we are using for our view, using flexbox to align our items
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#181818",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Menlo-Bold",
    fontSize: 30,
    color: "#F9CB40",
  },
  subtitleText: {
    fontFamily: "Menlo",
    fontSize: 16,
    color: "white",
  },
  inputText: {
    color: "white",
    paddingLeft: "2%",
    fontFamily: "Menlo",
    fontSize: 13,
    paddingTop: "2%",
  },
  leftIconCont: {
    paddingLeft: "5%",
  },
  testLinks: {
    fontFamily: "Menlo",
    fontSize: 13,
    color: "#FFFFFF",
  },
  topBotMargin: {
    height: "15%",
  },
});
