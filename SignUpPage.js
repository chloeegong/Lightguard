import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";
//import { wrap } from "module";

//This is our SignUpPage
export default function SignUpPage({ navigation }) {
  return (
    //This view encapsulates all of our elements
    <View style={styles.container}>
      {/** Text Element for our Title*/}
      <Text
        style={{
          top: "13%",
          fontFamily: "Menlo-Bold",
          fontSize: 30,
          color: "#F9CB40",
        }}
      >
        Sign Up
      </Text>
      {/** This is the status bar, the bar on top of the phone that shows battery life and time*/}
      <StatusBar style="auto" />
      {/** Input element for SignUp first and last name*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", top: "15%" }}
        placeholder="First Name"
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "user",
        }}
      />
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", top: "8%" }}
        placeholder="Last Name"
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "user",
        }}
      />
      {/** Input element for SignUp Email*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", top: "1%" }}
        placeholder="Email"
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "envelope",
        }}
      />
      {/** Input element for SignUp password*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "6%" }}
        secureTextEntry={true}
        placeholder="Password"
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "lock",
        }}
      />
      {/** Input element for password confirmation*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "13%" }}
        secureTextEntry={true}
        placeholder="Confirm Password"
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "lock",
        }}
      />
      {/** Input element for signup phone number*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "20%" }}
        placeholder="Phone Number"
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "phone",
        }}
      />
      {/** Button element for completing the sign up*/}
      <Button
        title="Next step"
        buttonStyle={{
          backgroundColor: "#A4A5F0",
          borderWidth: 2,
          borderColor: "#A4A5F0",
          borderRadius: 30,
        }}
        containerStyle={{
          bottom: "15%",
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => {
          navigation.navigate("Hazard");
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />
    </View>
  );
}

//Styling used for the view everything is incapsulated in
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    changeDirection: "inherit",
    backgroundColor: "#181818",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
//Styling used for the all of the inputs
const inputStyles = {
  inputStyle: {
    color: "white",
    paddingLeft: "3%",
    fontFamily: "Menlo",
    fontSize: 13,
    paddingTop: "7%",
  },
  leftIconContainerStyle: {
    paddingTop: "7%",
    paddingLeft: "5%",
  },
};
