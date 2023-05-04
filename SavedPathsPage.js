import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, wrap } from "react-native";
import { Text, Button, Input, Icon } from "@rneui/themed";

//This is our SavedPathsPage
export default function SavedPathsPage({ navigation }) {
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
          bottom: "10%",
        }}
      >
        Saved Paths
      </Text>

      {/** This is the status bar, the bar on top of the phone that shows battery life and time*/}
      <StatusBar style="auto" />

      {/** This is a button for our first saved location*/}
      <Button
        title={<CustomTitle3 />}
        titleStyle={{ fontSize: 18 }}
        color="black"
        buttonStyle={{
          borderColor: "transparent",
          paddingVertical: 10,
          borderRadius: 0,
        }}
        containerStyle={{
          width: "100%",
          bottom: "15%",
        }}
        icon={{
          name: "map",
          type: "font-awesome",
          size: 25,
          color: "white",
          width: "100%",
          marginLeft: "-5%",
          paddingRight: "20%",
          right: "5%",
        }}
        iconLeft
      />
      {/** This is a button for our second saved location*/}
      <Button
        title={<CustomTitle />}
        titleStyle={{ fontSize: 18 }}
        color="black"
        buttonStyle={{
          borderColor: "transparent",
          paddingVertical: 10,
          borderRadius: 0,
        }}
        containerStyle={{
          width: "100%",
          bottom: "20%",
        }}
        icon={{
          name: "map",
          type: "font-awesome",
          size: 25,
          color: "white",
          width: "100%",
          marginLeft: "-5%",
          paddingRight: "20%",
          right: "10%",
        }}
        iconLeft
      />

      {/** This is a button for our third saved location*/}
      <Button
        title={<CustomTitle2 />}
        color="black"
        titleStyle={{ fontSize: 18 }}
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"],
        }}
        buttonStyle={{
          borderColor: "transparent",
          paddingVertical: 10,
          borderRadius: 0,
        }}
        containerStyle={{
          width: "100%",
          bottom: "25%",
        }}
        icon={{
          name: "map",
          type: "font-awesome",
          size: 25,
          color: "white",
          width: "100%",
          marginLeft: "-5%",
          paddingRight: "20%",
          left: "5%",
        }}
        iconLeft
        iconContainerStyle={{ left: "5%" }}
        onPress={() => {
          navigation.navigate("PathSummary");
        }}
      />

      {/** Button element to used to move users to creating new saved paths or scheduling a saved path*/}
      <Button
        icon={{
          name: "pencil",
          type: "font-awesome",
          size: 30,
          color: "#F9CB40",
          width: "100%",
        }}
        buttonStyle={{
          width: 80,
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          borderRadius: 100,
          backgroundColor: "#181818",
        }}
        onPress={() => {
          navigation.navigate("SchedulePath");
        }}
      />
    </View>
  );
}

//Style for first button
const CustomTitle = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: "white",
          right: "5%",
        }}
      >
        University Library to Lot G2
      </Text>
      <Text
        style={{
          fontStyle: "italic",
          fontSize: 12,
          color: "white",
          right: "5%",
        }}
      >
        6:45PM
      </Text>
    </View>
  );
};

//Style for second button
const CustomTitle2 = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
        Lot G2 to University Bookstore
      </Text>
      <Text style={{ fontStyle: "italic", fontSize: 12, color: "white" }}>
        9PM
      </Text>
    </View>
  );
};

//Style for third button
const CustomTitle3 = () => {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: "white",
          right: "5%",
        }}
      >
        Alamitos Dorms to VEC 330
      </Text>
      <Text
        style={{
          fontStyle: "italic",
          fontSize: 12,
          color: "white",
          right: "5%",
        }}
      >
        2PM
      </Text>
    </View>
  );
};

//Stylesheet that we are using for our view, using flexbox to align our items
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
