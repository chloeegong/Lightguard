// Setting up our homepage using React Native Maps.
// Chloee Gong + Katrina Orevillo + Miguel Echeverria
// Setting up map + initial routing: https://www.youtube.com/watch?v=i8bni7mUqXE
// Search bar: https://www.youtube.com/watch?v=bvn_HYpix6s&t=1s, https://www.youtube.com/watch?v=Wq3dO05jv6o

import * as React from "react";
import * as Location from 'expo-location'
import { StyleSheet, Text, TextInputComponent, View } from "react-native";
import Constants from "expo-constants";
import MapView, { Marker, Polyline } from "react-native-maps"; // Chloee
import MapViewDirections from "react-native-maps-directions"; // Chloee
import { GOOGLE_MAPS_KEY } from '@env'; // Chloee
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"; // Chloee
const smileImage = require('../Lightguard-client/assets/smile.png') // Katrina
const flagImage = require('../Lightguard-client/assets/flag.png') // Katrina

export default function Map() {

    {/* Set default origin. */}
    {/* Miguel */}
    const [origin, setOrigin] = React.useState({
        latitude:33.78347139416779,
        longitude:-118.11440657520996,
    });

    {/* Set default destination. */}
    {/* Miguel */}
    const [destination, setDestination] = React.useState({
        latitude:33.78286056260645, 
        longitude:-118.11030815967545,
    });

    {/* Ask permission from user to use their location. */}
    {/* Katrina */}
    React.useEffect(() => {
        getLocationPermission();
    }, [])

    async function getLocationPermission() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted') {
            alert('We weren\'t able to get your location! Change permissions in your device settings.');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
        setOrigin(current);
    }

    return (
        <View style = {styles.container}>
            {/* Show map area as CSULB. */}
            {/* Miguel */}
            <MapView 
                style = {styles.map} 
                userInterfaceStyle={"dark"}
                initialRegion = {{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1
                }}
                >
                {/* Create map pin for origin. It can be dragged to set a new origin. */}
                {/* Katrina */}
                <Marker 
                    draggable={true}
                    coordinate={origin}
                    image={smileImage}
                    onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
                />

                {/* Create map pin for destination. It can be dragged to set a new destination. */}
                {/* Katrina */}
                <Marker 
                    draggable={true}
                    coordinate={destination}
                    image={flagImage}
                    onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
                />

                <Marker 
                    draggable
                    coordinate = {origin} 
                    onDragEnd = {e => setOrigin(e.nativeEvent.coordinate)}
                />
                <Marker 
                    draggable
                    coordinate = {destination} 
                    onDragEnd = {e => setDestination(e.nativeEvent.coordinate)}
                />

                {/* Map markers */}
                <Marker
                    title = "University Student Union"
                    coordinate = {{latitude: 33.781394139038255, longitude: -118.11363452819558}}
                    pinColor = "grey"
                />
                <Marker
                    title = "CSULB Bookstore"
                    coordinate = {{latitude: 33.78008155620075, longitude: -118.11433773815789,}}
                    pinColor = "blue"
                    description="Open 8am-5pm"
                />
                <Marker
                    title = "CSULB Art Store"
                    coordinate = {{latitude: 33.77795055536601, longitude: -118.11197028975022}}
                    pinColor = "blue"
                    description="Open 8am-5pm"
                />
                <Marker
                    title = "CSULB University Library"
                    coordinate = {{latitude: 33.77715748396334, longitude: -118.11440225169851}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Brotman Hall"
                    coordinate = {{latitude: 33.783095366206354, longitude: -118.11550847702843}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Collge of Bussiness Administration"
                    coordinate = {{latitude: 33.784203603931346, longitude: -118.11597388561465}}
                    pinColor = "grey"
                />  
                <Marker 
                    title = "College of Engineering"
                    coordinate = {{latitude: 33.78345456078655, longitude: -118.11035197562316}}
                    pinColor = "grey"
                />
                <Marker
                    title = "College of Health and Human Services"
                    coordinate = {{latitude: 33.78363290498197, longitude: -118.10941856697004}}
                    pinColor = "grey"
                />
                <Marker
                    title = "College of Professional and International Education - Headquarters "
                    coordinate = {{latitude: 33.7812564712598, longitude: -118.11004972035246 }}
                    pinColor = "grey"
                />
                <Marker
                    title = "College of Natural Sciences and Mathematics"
                    coordinate = {{latitude: 33.780027654995564, longitude: -118.11231386367068}}
                    pinColor = "grey"
                />
                <Marker
                    title = "University Theatre"
                    coordinate = {{latitude: 33.77679903325372, longitude: -118.11153607049577}}
                    pinColor = "cyan"
                />
                <Marker 
                    title = "Walter Pyramid"
                    coordinate = {{latitude: 33.78710202775871, longitude: -118.11456526691019}}
                    pinColor = "green"
                />
                <Marker
                    title = "Baseball Field"
                    coordinate = {{latitude: 33.786414627192, longitude: -118.11337633312556}}
                    pinColor = "green"
                />
                <Marker 
                    title = "Softball Field"
                    coordinate = {{latitude: 33.78631151663152, longitude: -118.11200130544826}}
                    pinColor = "green"
                />
                <Marker
                    title = "Track and Field"
                    coordinate = {{latitude: 33.78474765787074, longitude: -118.11461695958864}}
                    pinColor = "green"
                />
                <Marker
                    title = "Ken Lindgren Aquatics Center"
                    coordinate={{latitude: 33.78384541869399, longitude: -118.11254924879574}}
                    pinColor = "green"
                /> 
                <Marker 
                    title = "Tennis Courts"
                    coordinate = {{latitude: 33.784687508885945, longitude: -118.11058492349595}}
                    pinColor = "green"
                />
                <Marker
                    title = "Life Fit Center @ The Beach"
                    coordinate = {{latitiude: 33.78328688488456, longitude: -118.1119289354493}}
                    pinColor = "green"
                />
                <Marker 
                    title = "Student Recreation and Wellness Center"
                    coordinate = {{latitude: 33.78504840216096, longitude: -118.10920989569456}}
                    pinColor = "green"
                />
                <Marker 
                    title = "Hardfact Hill"
                    coordinate={{latitude: 33.780643409616545, longitude: -118.11203129233265}}
                    pinColor = "green"
                />
                <Marker 
                    title = "Central Quad"
                    coordinate ={{latitude: 33.77803965450117, longitude: -118.11352004410354}}
                    pinColor = "green"
                />
                <Marker 
                    title = "The Outpost Grill"
                    coordinate = {{latitude: 33.78262839754427, longitude: -118.11017035252026}}
                    pinColor = "orange"
                />
                <Marker 
                    title = "The Nugget Grill & Pub"
                    coordinate = {{latitude: 33.780406214630815, longitude: -118.11451005576808}}
                    pinColor = "orange"
                />
                {/* End of map markers */}

                {/* Draw WALKING path between the origin and destination. */}
                {/* Katrina */}
                <MapViewDirections 
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_KEY}

                    mode='WALKING'
                    strokeColor = '#a4a5f0'
                    strokeWidth = {8}
                />
            </MapView>
        
            <View style={styles.searchContainer}>
                {/* Configuring the search bar for users to select an origin. */}
                {/* Katrina */}
                <GooglePlacesAutocomplete
                    styles={styles.searchInput}
                    placeholder='Where are you starting from?'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        // console.log(data, details);
                        const newOrigin = {
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng
                        }
                        setOrigin(newOrigin)
                    }}
                    query={{
                        key: GOOGLE_MAPS_KEY,
                        language: 'en',
                    }}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    />

                {/* Configuring the search bar for users to select a destination. */}
                {/* Katrina */}
                <GooglePlacesAutocomplete
                    styles={styles.searchInput}
                    placeholder='Where are you walking to?'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        // console.log(data, details);
                        const newDestination = {
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng
                        }
                        setDestination(newDestination)
                    }}
                    query={{
                        key: GOOGLE_MAPS_KEY,
                        language: 'en',
                    }}
                    enablePoweredByContainer={false}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    map: {
        width: '100%',
        height: '100%',
    },

    searchContainer: {
        position: "absolute",
        width: "90%",
        top: Constants.statusBarHeight,
      },

    searchInput: {
        TextInputComponent: {
            backgroundColor: "#404040"
        }

    }
})