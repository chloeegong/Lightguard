//jocelyn
import React from 'react';
import axios from 'axios';
import {View, StyleSheet, Button, Alert} from 'react-native';


export default function SBMessageLocationPage({ navigation }) {
  const handleMessage= async() => {
    console.log(("inside handleMessage"))
    try {
      const response = await axios.get('http://localhost:3001/message_contact', {});
      //console.log(response.data);
      navigation.navigate("SBCancelMessage")
      
    } catch (error) {
      console.error(error.response);
    }

  };
  //creates alert 2 
  return (
    Alert.alert("Your contact has been notified.", "Your trusted contact has been notified with your current location.", [
        {
          text: 'I am ok now!',
          onPress: () => {console.log('Safely Pressed')
                            handleMessage()
                          },
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
