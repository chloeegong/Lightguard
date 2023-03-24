//jocelyn
import { Button, ThemeProvider, Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';


//calls emergency contact
export default function CallEmergServicesPage({ navigation }) {

    //making fetch api call to backend server
    const initiateCall = async () => {
      const source = axios.CancelToken.source();
      const url = `http://localhost:3001/call-emerg`;

      try {
        const response = await axios.get(url, { cancelToken: source.token }).then(
          data => data.json(), // Parsing the data into a JavaScript object
          json => alert(JSON.stringify(json)) // Displaying the stringified data in an alert popup
        ); 
        console.log(response.data); 
      } catch(error) {
        console.error(error.response);
      }
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
          onPress={() => {
            initiateCall(); 
          }}
          titleStyle={{ fontFamily: "Menlo", fontSize: 18 }} />
      );
 
};
