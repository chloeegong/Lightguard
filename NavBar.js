{/* Navigation Bar */}
{/* Katrina */}

import { Pressable, View } from "react-native";
import { Icon } from "@rneui/base";
import { useNavigation } from '@react-navigation/native'

export default function NavBar() {

    const navigation = useNavigation();

    return (
        <View 
            style = {{
                position: 'absolute',
                alignItems: 'center',
                bottom: 20,
                
            }}>

            {/* Nav Element */}
            <View 
                style = {{
                    flexDirection: 'row',
                    backgroundColor: '#eee',
                    width: '90%',
                    padding: '5%',
                    justifyContent: "space-evenly",
                    borderRadius: 40
                }}>

                {/* Katrina */}
                {/* Adds map button to navbar */}
                <Pressable onPress={() => {navigation.navigate("Map");}}>
                    <Icon name = "map"/>
                </Pressable>

                {/* Katrina */}
                {/* Adds hazard reporting button to navbar */}
                <Pressable onPress={() => {navigation.navigate("Hazard");}}>
                    <Icon name = "warning"/>
                </Pressable>

                {/* Jocelyn */}
                {/* Adds safety button to navbar */}
                <Pressable onPress={() => {navigation.navigate("SafetyButton");}}>
                    <Icon name = "shield"/>
                </Pressable>

                {/* Katrina */}
                {/* Adds emergency button to navbar */}
                <Pressable onPress={() => {navigation.navigate("CallEmergServices");}}>
                    <Icon name = "call"/>
                </Pressable>

                {/* Katrina */}
                {/* Adds profile button to navbar */}
                <Pressable onPress={() => {navigation.navigate("ProfilePage");}}>
                    <Icon name = "person"/>
                </Pressable>
            </View>
        </View>
    );
  }
  