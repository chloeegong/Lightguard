import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, wrap } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";
//import { wrap } from "module";

export default function SignUpPage() {
  return (
    <View style={styles.container}>
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

      <StatusBar style="auto" />

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
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "6%" }}
        placeholder="Password"
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "lock",
        }}
      />
      <Input
        {...inputStyles}
        containerStyle={{ width: "80%", bottom: "13%" }}
        placeholder="Confirm Password"
        leftIcon={{
          size: "17%",
          color: "white",
          type: "font-awesome",
          name: "lock",
        }}
      />
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
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
      />
    </View>
  );
}

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
const inputStyles = {
  secureTextEntry: true,
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
