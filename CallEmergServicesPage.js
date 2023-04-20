//jocelyn
import { Button, ThemeProvider, Input } from '@rneui/themed';
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import React, {useState} from 'react';


//calls emergency contact
export default function CallEmergServicesPage({ navigation }) {
  
  const handleCall= async() => {
    console.log(("inside handleCall"))
    try {
      const response = await axios.get('http://localhost:3001/call-emerg', {});
      //console.log(response.data);
      navigation.navigate("Map");
    } catch (error) {
      console.error(error.response);
    }

  };


//const {text}=this.state;
//creating simple button for the application
//onPress uses the initiateCall function to fetch api
    return (
      //This view encapsulates all of our elements
      <View style={styles.container}>
        <Button
          title="Call the Emergency Number"
          buttonStyle={{
            backgroundColor: "#A4A5F0",
            borderWidth: 2,
            borderColor: "#A4A5F0",
            borderRadius: 30,
          }}
          containerStyle={{
            bottom: "2%",
            width: 200,
            marginHorizontal: 700,
            marginVertical: 350,
          }}
          onPress={() => {
            handleCall();
          }}
          titleStyle={{ fontFamily: "Menlo", fontSize: 18 }} />
        </View>  
      );
  
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

