import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import { Text, Button, Input, CheckBox, Switch, Icon } from "@rneui/themed";
import React, { useState } from "react";

//This is our SchedulePath page
export default function SchedulePath({ navigation }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  return (
    //This view encapsulates all of our elements
    <View style={styles.container}>
      {/** Text Element for our Title*/}
      <Text
        style={{
          top: "8%",
          right: "18%",
          fontFamily: "Menlo-Bold",
          fontSize: 30,
          color: "#F9CB40",
        }}
      >
        New Paths
      </Text>
      <Text
        style={{
          top: "10%",
          right: "17.5%",
          fontFamily: "Menlo-Bold",
          fontSize: 20,
          color: "#F9CB40",
        }}
      >
        Generate Route
      </Text>
      <Text
        style={{
          top: "10%",
          right: "6.9%",
          fontFamily: "Menlo",
          fontSize: 11,
          color: "#F9CB40",
        }}
      >
        Lets start - where do you want to go?
      </Text>

      {/** This is the status bar, the bar on top of the phone that shows battery life and time*/}
      <StatusBar style="auto" />

      {/** Input element for Starting Point*/}
      <Input
        inputStyle={{
          color: "white",
          paddingLeft: "2%",
          fontFamily: "Menlo",
          fontSize: 13,
          paddingTop: "8%",
        }}
        containerStyle={{ width: "80%", top: "10%", right: "3%" }}
        placeholder="Starting Point"
        leftIconContainerStyle={{
          paddingTop: "7%",
          paddingLeft: "5%",
        }}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "map-pin",
        }}
      />
      {/** Input element for Destination*/}
      <Input
        secureTextEntry={true}
        inputStyle={{
          color: "white",
          paddingLeft: "3%",
          fontFamily: "Menlo",
          fontSize: 13,
          paddingTop: "7%",
        }}
        containerStyle={{ width: "80%", top: "4%", right: "3%" }}
        placeholder="Destination"
        leftIconContainerStyle={{
          paddingTop: "7%",
          paddingLeft: "5%",
        }}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "map-pin",
        }}
      />
      {/** Text Element for Time */}
      <Text
        style={{
          top: "5%",
          right: "33.4%",
          fontFamily: "Menlo-Bold",
          fontSize: 20,
          color: "#F9CB40",
        }}
      >
        Time
      </Text>
      <Text
        style={{
          top: "5%",
          left: "2%",
          fontFamily: "Menlo",
          fontSize: 11,
          color: "#F9CB40",
        }}
      >
        We'll let you know when it's time to head over.
      </Text>
      {/** Input element for Hour/Min*/}
      <Input
        inputStyle={{
          color: "white",
          paddingLeft: "2%",
          fontFamily: "Menlo",
          fontSize: 13,
          paddingTop: "8%",
          top: "10%",
        }}
        containerStyle={{ width: "20%", top: "5%", right: "10%" }}
        placeholder="00:00"
      />
      {/** Input element for AM/PM*/}
      <Input
        secureTextEntry={true}
        inputStyle={{
          color: "white",
          paddingLeft: "13%",
          fontFamily: "Menlo",
          fontSize: 13,
          paddingTop: "55%",
          bottom: "3%",
        }}
        containerStyle={{ width: "15%", bottom: "5.3%", left: "5%" }}
        placeholder="AM"
      />
      {/**need filter text */}
      <Text
        style={{
          bottom: "7%",
          right: "29%",
          fontFamily: "Menlo-Bold",
          fontSize: 20,
          color: "#F9CB40",
        }}
      >
        Filters
      </Text>
      <Text
        style={{
          bottom: "7%",
          left: "3%",
          fontFamily: "Menlo",
          fontSize: 11,
          color: "#F9CB40",
        }}
      >
        We'll find paths that encounter what you choose.
      </Text>

      {/**filter */}
      {/** CheckBox Element for our users to select what hazard they are reporting*/}
      <CheckBox
        {...boxStyle}
        center
        size={15}
        containerStyle={{
          right: "15.5%",
          bottom: "5%",
          backgroundColor: "#181818",
        }}
        title="Streetlights"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />
      <CheckBox
        {...boxStyle}
        center
        size={15}
        containerStyle={{
          right: "15.5%",
          bottom: "7%",
          backgroundColor: "#181818",
        }}
        title="Bluelights   "
        checked={check3}
        onPress={() => setCheck3(!check3)}
      />
      <CheckBox
        {...boxStyle}
        center
        size={15}
        containerStyle={{
          right: "16%",
          bottom: "9%",
          backgroundColor: "#181818",
        }}
        title="Accessible"
        checked={check4}
        onPress={() => setCheck4(!check4)}
      />

      {/** Button element to move to next page when email and password and entered*/}
      <Button
        title="Create Route"
        buttonStyle={{
          backgroundColor: "#A4A5F0",
          borderWidth: 2,
          borderColor: "#A4A5F0",
          borderRadius: 30,
        }}
        containerStyle={{
          bottom: "8%",
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate("SavedPaths");
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />
    </View>
  );
}
//Styling used for all of the textboxes
const boxStyle = {
  textStyle: { fontSize: "10px", color: "white" },
};

//Stylesheet that we are using for our view, using flexbox to align our items
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    changeDirection: "inherit",
    backgroundColor: "#181818",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
