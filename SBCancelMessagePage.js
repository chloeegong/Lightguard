//jocelyn
import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';


export default function SBMessageLocationPage({ navigation }) {
  //connecting to backend with necessary parameters
  message = "Alert: Your friend has indicted that they no longer need help. Thank you."
  const handleMessage= async() => {
    try {
      const response = await axios.post('http://localhost:3001/message_contact', {
        message
      });
      //console.log(response.data);
      navigation.navigate("Map");
    } catch (error) {
      console.error(error.response);
    }

  };
  return (
    //creates alert 3 
    Alert.alert("Glad you're ok.", "We have notified your emergency contact.", [
        {
          text: 'Ok',
          onPress: () => {console.log('Message Canceled')},
          style: 'cancel',
        },
        
      ])
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
