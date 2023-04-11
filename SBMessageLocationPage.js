//jocelyn
import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';


export default function SBMessageLocationPage({ navigation }) {
  //creates alert 2 
  return (
    Alert.alert("Your contact has been notified.", "Your trusted contact has been notified with your current location.", [
        {
          text: 'I am ok now!',
          onPress: () => {console.log('Safely Pressed')
                            navigation.navigate("SBCancelMessage")},
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
