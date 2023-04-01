import { StatusBar } from "expo-status-bar";
import NavBar from "./NavBar";
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import { Text, Button, Input, CheckBox, Icon } from "@rneui/themed";
import React, { useState } from "react";
//import { wrap } from "module";

export default function HazardPage({ navigation }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  return (
    <View style={styles.container}>
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
      <CheckBox
        {...boxStyle}
        center
        title="Criminal Activity"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />
      <CheckBox
        {...boxStyle}
        center
        title="Construction"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />
      <CheckBox
        {...boxStyle}
        center
        title="Blocked Path"
        checked={check3}
        onPress={() => setCheck3(!check3)}
      />
      <CheckBox
        {...boxStyle}
        center
        title="Other"
        checked={check4}
        onPress={() => setCheck4(!check4)}
      />
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
          navigation.navigate("Login");
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />

    <NavBar/>
    </View>
  );
}
const boxStyle = {
  textStyle: { fontSize: "15px", color: "white" },
  containerStyle: { top: "28%", backgroundColor: "#181818" },
};
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
