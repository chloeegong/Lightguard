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