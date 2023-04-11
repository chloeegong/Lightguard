//jocelyn
import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';


export default function SafetyButtonPage({ navigation }) {
  //const [message, setMessage] = useState();
  //connecting to backend with necessary parameters
  message = "Alert: Your friend selected that they need help while on their walk to their destination. Please check-in on them."
  const handleMessage= async() => {
    try {
      const response = await axios.post('http://localhost:3001/message_contact', {
        message
      });
      //console.log(response.data);
    } catch (error) {
      console.error(error.response);
    }

  };

  return (
    //creates alert 1 
    Alert.alert('Are you still there?', "Just making sure you're safe. If you select you need help, we will notify your emergency contact.", [
      //{setTimeout: () => {
        //console.log("2 sec.")
        //}},
        {text: 'Yes, I am ok!',
          onPress: () => console.log('Safely Pressed'),
          style: 'cancel',
        },
        {text: 'No, I need help.', onPress: () => {handleMessage 
                                                    navigation.navigate("SBMessageLocation")},
        },
        //{setTimeout: () => {handleMessage 
          //navigation.navigate("SBMessageLocation")}, 60000: any},
          
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
