import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";

//This is our ProfilePage
export default function ProfilePage({ navigation }) {
  return (
    //This view encapsulates all of our elements
    <View style={styles.container}>
      {/** Text Element for our Title*/}
      <Text
        style={{
          fontFamily: "Menlo-Bold",
          fontSize: 30,
          color: "#F9CB40",
          backgroundColor: "#181818",
          width: "100%",
          textAlign: "center",
          paddingVertical: "20%",
          paddingBottom: "8%",
          bottom: "4%",
        }}
      >
        Profile
      </Text>

      {/** This is the status bar, the bar on top of the phone that shows battery life and time*/}
      <StatusBar style="auto" />

      <Text
        style={{
          fontFamily: "Menlo-Bold",
          fontSize: 18,
          color: "white",
          width: "100%",
          //textAlign: "center",
          //paddingVertical: "20%",
          //paddingBottom: "8%",
          top: "0%",
          left: "8%",
        }}
      >
        Personal Information
      </Text>
      {/** Element for Profile first and last name*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", top: "1%" }}
        placeholder="Phoenix"
        placeholderTextColor={"white"}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "user",
        }}
      />
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "3%" }}
        placeholder="Ngan"
        placeholderTextColor={"white"}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "user",
        }}
      />
      {/** Element for Profile Email*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "7%" }}
        placeholder="Phoenix.Ngan@student.csulb.edu"
        placeholderTextColor={"white"}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "envelope",
        }}
      />
      {/** Element for Profile password*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "11%" }}
        secureTextEntry={true}
        placeholder="**********"
        placeholderTextColor={"white"}
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "lock",
        }}
      />
      {/** Element for Profile phone number*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "15%" }}
        placeholder="(562)123-4567"
        placeholderTextColor={"white"}
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "phone",
        }}
      />
      {/** Text Element for Emergency Contacts */}
      <Text
        style={{
          fontFamily: "Menlo-Bold",
          fontSize: 18,
          color: "white",
          width: "100%",
          //textAlign: "center",
          //paddingVertical: "20%",
          //paddingBottom: "8%",
          bottom: "12%",
          left: "8%",
        }}
      >
        Emergency Contacts
      </Text>
      {/** Element for E-Contact first and last name*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "11%" }}
        placeholder="Katrina"
        placeholderTextColor={"white"}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "user",
        }}
      />
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "15%" }}
        placeholder="Orevillo"
        placeholderTextColor={"white"}
        leftIcon={{
          size: "12%",
          color: "white",
          type: "font-awesome",
          name: "user",
        }}
      />
      {/** Element for E-contact phone number*/}
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "19%" }}
        placeholder="(562)765-4321"
        placeholderTextColor={"white"}
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "phone",
        }}
      />
      {/** Button element for logging out*/}
      <Button
        title="Log out"
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
          navigation.navigate("Login");
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
    backgroundColor: "black",
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
