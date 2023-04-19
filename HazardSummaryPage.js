import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";
//import { wrap } from "module";

export default function HazardSummaryPage({ navigation }) {
  const [hazards, setHazards] = useState([]); 

  useEffect(() => {
    const fetchHazards = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/hazard'); 
        setHazards(response.data); 
      } catch (error) {
        console.error(error.response)
      }
    }; 
    fetchHazards(); 
  }, []); 

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
          Hazard Summary
      </Text>
      {hazards.map((hazard) => (
        <View key={hazard._id}>
          {/* include location of activity */}
          <Text>{hazard.criminalActivity}</Text>
          <Text>{hazard.construction}</Text>
          <Text>{hazard.blockedPath}</Text>
          <Text>{hazard.other}</Text>
        </View>
      ))}
    <NavBar/>
    </View>
  ); 
}

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
