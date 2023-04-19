import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";

//This is our PathSummaryPage
export default function LoginPage({ navigation }) {
  return (
    //This view encapsulates all of our elements
    <View style={styles.container}>
      {/** Text Element for our Title*/}
      <Text
        style={{
          top: "10%",
          fontFamily: "Menlo-Bold",
          fontSize: 30,
          color: "#F9CB40",
        }}
      >
        Path Summary
      </Text>
      <Text
        style={{
          top: "10%",
          fontFamily: "Menlo",
          fontSize: 16,
          color: "white",
        }}
      >
        Here are your stats for this walk:
      </Text>

      {/** This is the status bar, the bar on top of the phone that shows battery life and time*/}
      <StatusBar style="auto" />

      {/** Text element for how many minutes walked*/}
      <Text style={{ color: "white", left: "10%", top: "17%" }}>
        16 Minutes
      </Text>
      {/** Icon element for how many minutes walked*/}
      <Icon
        raised
        name="hourglass-start"
        type="font-awesome"
        right="200%"
        top="150%"
        size="15"
      />
      {/** Text element for how many miles walked*/}
      <Text style={{ color: "white", left: "10%", top: "12%" }}>
        {" "}
        0.6 Miles
      </Text>
      {/** Icon element for how many miles walked*/}
      <Icon
        raised
        name="map"
        type="font-awesome"
        right="200%"
        top="50%"
        size="15"
      />
      {/** Text element for how many lights passed while walking*/}
      <Text style={{ color: "white", left: "12%", top: "6.5%" }}>
        90 Lights Passed
      </Text>
      {/** Icon element for how many lights passed while walking*/}
      <Icon
        raised
        name="flag"
        type="font-awesome"
        right="200%"
        top="-50%"
        size="15"
      />
      {/** Button element to move to saving this path*/}
      <Button
        title="Save Path"
        buttonStyle={{
          backgroundColor: "#A4A5F0",
          borderWidth: 2,
          borderColor: "#A4A5F0",
          borderRadius: 30,
        }}
        containerStyle={{
          bottom: "2%",
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
          top: "2%",
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
        onPress={() => {
          navigation.navigate("SavedPaths");
        }}
      />
      {/** Button element to move to close leading to schedule path currently*/}
      <Button
        title="Close"
        buttonStyle={{
          backgroundColor: "#A4A5F0",
          borderWidth: 2,
          borderColor: "#A4A5F0",
          borderRadius: 30,
        }}
        containerStyle={{
          bottom: "2%",
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ fontFamily: "Menlo", fontSize: 18 }}
        onPress={() => {
          navigation.navigate("SchedulePath");
        }}
      />
    </View>
  );
}

//Stylesheet that we are using for our view, using flexbox to align our items
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
