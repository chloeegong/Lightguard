import axios from "axios";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import { Text, Button, CheckBox, Input, Icon } from "@rneui/themed";
//import { wrap } from "module";

export default function HazardPage({ navigation }) {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);

  const handleHazard = async () => {
    console.log("res: " + setCheck1)
    try {
      const response = await axios.post('http://localhost:3001/api/hazard/add-hazard', {
        check1,
        check2,
        check3,
        check4
      });
 
      console.log(response.data);
      navigation.navigate("Login"); // will edit route eventually

      // reset checkbox states to false
      // setCheck1(false);
      // setCheck2(false);
      // setCheck3(false);
      // setCheck4(false);
    } catch (error) {
      console.error(error.response);
    }
  }
 
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
        onIconPress={() => setCheck1(!check1)}
        onChange={!check1}
      />
      <CheckBox
        {...boxStyle}
        center
        title="Construction"
        checked={check2}
        onIconPress={() => setCheck2(!check2)}
      />
      <CheckBox
        {...boxStyle}
        center
        title="Blocked Path"
        checked={check3}
        onIconPress={() => setCheck3(!check3)}
      />
      <CheckBox
        {...boxStyle}
        center
        title="Other"
        checked={check4}
        onIconPress={() => setCheck4(!check4)}
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
          handleHazard(); 
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />
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
