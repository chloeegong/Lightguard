//jocelyn
import { Button, ThemeProvider, Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


//calls emergency contact
export default function CallEmergServicesPage({ navigation }) {


  //making fetch api call to backend server
  initiateCall = () => {
 
      fetch('http://localhost:3001/call-emerg', { method: 'GET' })
        .then(data => data.json()) // Parsing the data into a JavaScript object
        .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup
        .catch(err => console.error(err))
      return;
    }


//const {text}=this.state;
//creating simple button for the application
//onPress uses the initiateCall function to fetch api
    return (
       
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
            marginHorizontal: 110,
            marginVertical: 350,
          }}
          onPress={this.initiateCall}
          titleStyle={{ fontFamily: "Menlo", fontSize: 18 }} />
      );
 
};
