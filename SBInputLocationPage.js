//jocelyn
import { Button, ThemeProvider, Input } from '@rneui/themed';
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import React, {useState} from 'react';


//calls emergency services - for now, it's jocelyn's number
export default function CallEmergServicesPage({ navigation }) {
    const [location, setLocation] = useState();
  const handleMessage= async() => {
    console.log(("inside handleCall"))
    try {
      const response = await axios.get('http://localhost:3001/message_contact', {
        location
      });
      //console.log(response.data);
      navigation.navigate("SBMessageLocation");
    } catch (error) {
      console.error(error.response);
    }

  };

  //making fetch api call to backend server
  // initiateCall = () => {
 
  //     fetch('http://localhost:3001/call-emerg', { method: 'GET' })
  //       .then(data => data.json()) // Parsing the data into a JavaScript object
  //       .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
  //       .catch(err => console.error(err))
  //     return;
  //   }


//const {text}=this.state;
//creating simple button for the application
//onPress uses the initiateCall function to fetch api
    return (
      //This view encapsulates all of our elements
      <View style={styles.container}>
        {/** Input element for location*/}
      <Input
        inputStyle={styles.inputText}
        containerStyle={{ width: "80%" }}
        placeholder="Current Location"
        //leftIconContainerStyle={styles.leftIconCont}
        //leftIcon={{
          //size: "12%",
          //color: "white",
          //type: "font-awesome",
          //name: "envelope",
        
        
        onChangeText={setLocation}
      />
      <Button
        title="Updated location"
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
          handleMessage();
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />
        </View>  
      );
  
};


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
