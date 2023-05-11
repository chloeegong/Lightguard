import axios from "axios";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import NavBar from "./NavBar";
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import { Text, Button, CheckBox, Input, Icon } from "@rneui/themed";
//import { wrap } from "module";

//This is our HazardPage
export default function HazardPage({ navigation }) {
  const [criminalActivity, setCriminalActivity] = useState(false);
  const [construction, setConstruction] = useState(false);
  const [blockedPath, SetBlockedPath] = useState(false);
  const [other, setOther] = useState(false);

  const handleHazard = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/hazard/add-hazard', {
        criminalActivity,
        construction,
        blockedPath,
        other
      });
 
      console.log(response.data);
      navigation.navigate("Map"); // will edit route eventually
    } catch (error) {
      console.error(error.response);
    }
  }

  return (
    //This view encapsulates all of our elements
    <View style={styles.container}>
      {/** Text Element for our Title*/}
      <Text
        style={{
          top: "20%",
          fontFamily: "Menlo-Bold",
          fontSize: 30,
          color: "#F9CB40",
        }}
      >
        Hazard Reporting
      </Text>
      {/** CheckBox Element for our users to select what hazard they are reporting*/}
      <CheckBox
        {...boxStyle}
        center
        title="Criminal Activity"
        checked={criminalActivity}
        onPress={() => setCriminalActivity(!criminalActivity)}
      />
      <CheckBox
        {...boxStyle}
        center
        title="Construction"
        checked={construction}
        onPress={() => setConstruction(!construction)}
      />
      <CheckBox
        {...boxStyle}
        center
        title="Blocked Path"
        checked={blockedPath}
        onPress={() => SetBlockedPath(!blockedPath)}
      />
      <CheckBox
        {...boxStyle}
        center
        title="Other"
        checked={other}
        onPress={() => setOther(!other)}
      />
      {/** Button element to submit the report, temporarily leads to the login page again*/}
      <Button
        title="Report"
        buttonStyle={{
          backgroundColor: "#A4A5F0",
          borderWidth: 2,
          borderColor: "#A4A5F0",
          borderRadius: 30,
        }}
        containerStyle={{
          top: "35%",
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => {
          handleHazard(); 
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />

    <NavBar/>
    </View>
  );
}
//Styling used for all of the textboxes
const boxStyle = {
  textStyle: { fontSize: "15px", color: "white" },
  containerStyle: { top: "28%", backgroundColor: "#181818" },
};
//Styling used for the view everything is incapsulated in
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    changeDirection: "inherit",
    backgroundColor: "#181818",
    alignItems: "center",
    //justifyContent: "space-around",
  },
});
