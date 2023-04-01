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
                <Pressable onPress={() => {navigation.navigate("Map");}}>
                    <Icon name = "map"/>
                </Pressable>

                <Pressable onPress={() => {navigation.navigate("Hazard");}}>
                    <Icon name = "star"/>
                </Pressable>

                <Pressable>
                    <Icon name = "person"/>
                </Pressable>
            </View>
        </View>
    );
  }
  