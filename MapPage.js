// Setting up our homepage using React Native Maps.
// Chloee Gong + Katrina Orevillo + Miguel Echeverria + Jocelyn Gonzalez
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
const steetLampImage = require('../Lightguard-client/assets/street-lamp.png') //Jocelyn

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

    {/* Set light destinations */}
    {/* Jocelyn */}

    const lampDeukmejianWayN1 = {latitude: 33.784066, longitude: -118.110767}

    const lampDeukmejianWayN2 = {latitude: 33.784070, longitude: -118.111260}

    const lampDeukmejianWayE1 = {latitude: 33.783933, longitude: -118.110065}

    const lampDeukmejianWayE2 = {latitude: 33.783297, longitude: -118.110078}

    const lampDeukmejianWayE3 = {latitude: 33.782075, longitude: -118.110058}

    const lampLifeFitCorner = {latitude: 33.783659, longitude: -118.111582}

    const lampHornCenterN = {latitude: 33.783743, longitude: -118.114116}

    const lampHornCenterNCorner = {latitude: 33.783757, longitude: -118.114489}

    const lampCarolynArtMuseumN = {latitude: 33.783803, longitude: -118.114791}

    const lampCarolynArtMuseumNW = {latitude: 33.783805, longitude: -118.115058}

    const lampCarolynArtMuseumW = {latitude: 33.783695, longitude: -118.115174}

    const lampBusinessE = {latitude: 33.783795, longitude: -118.115392}

    const lampBusinessSECorner = {latitude: 33.783649, longitude: -118.1115506}

    const lampStrawSculptor = {latitude: 33.783583, longitude: -118.115382}

    const lampBusinessSE = {latitude: 33.783787, longitude: -118.115875}

    const lampBusinessSW = {latitude: 33.784111, longitude: -118.116534}

    const lampUnderMerriamWayTunnel = {latitude: 33.784411, longitude: -118.117096}

    const lampG4WalkingPathCorner = {latitude: 33.783750, longitude: -118.117647}

    const lampLosAlLawnE = {latitude: 33.783427, longitude: -118.117826}

    const lampLosAlLawnSECorner = {latitude: 33.783166, longitude: -118.118022}

    //WCentral
    const lampPyramidS = {latitude: 33.786689, longitude:  -118.114677}

    const lampParksidePathway = {latitude: 33.786916, longitude:  -118.119364}

    const lampSHSS = {latitude: 33.782107, longitude:  -118.118155}

    const lampBrotmanE = {latitude: 33.782579, longitude:  -118.114675}

    const lampGeorgeAllenFieldE = {latitude: 33.786744,  longitude: -118.109984}

    //right T
    const lampStateUniversityDr1 = {latitude: 33.781568, longitude:  -118.110436}

    const lampStateUniversityDr2 = {latitude: 33.781581, longitude:  -118.111353}

    const lampECampusDrLoop = {latitude: 33.781146, longitude:  -118.111988}

    const lampECampusDrSidewalk = {latitude: 33.780419, longitude: -118.111708}

    //LowerCampus
    const lampCentralPlantS = {latitude: 33.781646, longitude: -118.112571}

    const lampUpperLowerCampusStairs1 = {latitude: 33.781646, longitude: -118.112617}

    const lampUpperLowerCampusStairs2 = {latitude: 33.780268, longitude:  -118.113092}

    const lampMLSCS = {latitude: 33.780106,  longitude: -118.112568}

    const lampHSCIW = {latitude: 33.779947,  longitude: -118.113325}

    const lampSSCW = {latitude: 33.779715, longitude: -118.113396}

    const lampFO3N = {latitude: 33.779579, longitude: -118.113593}

    const lampCentralQuadW1 = {latitude: 33.778623, longitude: -118.113576}

    const lampCentralQuadDiagnol = {latitude: 33.778518, longitude: -118.113284}

    const lampCentralQuadMiddel = {latitude: 33.778185, longitude:  -118.113361}

    const lampCentralQuadS = {latitude: 33.777285,  longitude: -118.113697}

    const lampMHBW = {latitude: 33.777023, longitude: -118.113395}

    const lampUTN = {latitude: 33.776968, longitude: -118.111826}

    const lampLibraryCenterN = {latitude: 33.777426, longitude: -118.114377}

    const lampLibraryW = {latitude: 33.777512, longitude: -118.115217}

    const lampLA2W = {latitude: 33.777997, longitude: -118.115082}

    const lampLA2N = {latitude: 33.777852,  longitude: -118.114594}

    const lampLA2E = {latitude: 33.777718, longitude: -118.114291}

    const lampLA4E = {latitude: 33.778412, longitude: -118.114063}

    const lampLA5S = {latitude: 33.778711, longitude: -118.114145}
    
    //Bookstore
    const lampBookstoreSE = {latitude: 33.779746, longitude:  -118.113773}

    const lampBookstoreE = {latitude: 33.780163, longitude: -118.113412}

    const lampNuggetE = {latitude: 33.780300,  longitude: -118.113762}


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
                    
                {/*Street Lamps*/}
                {/* Jocelyn */}
                <Marker
                    title = "Lamp - Deukmejian Way 1"
                    coordinate = {{latitude: 33.784066, longitude: -118.110767}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - George Allen Field"
                    coordinate = {{latitude: 33.786744,  longitude: -118.109984}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Parkside"
                    coordinate = {{latitude: 33.786916, longitude:  -118.119364}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Business E"
                    coordinate = {{latitude: 33.783795, longitude: -118.115392}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Central Plant"
                    coordinate = {{latitude: 33.781646, longitude: -118.112571}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Los Al Lawn E"
                    coordinate = {{latitude: 33.783427, longitude: -118.117826}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Library"
                    coordinate = {{latitude: 33.777426, longitude: -118.114377}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Pyramid"
                    coordinate = {{latitude: 33.786689, longitude:  -118.114677}}
                    image={steetLampImage}
                />



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

                {/* Beginning of Map markers */}
                {/*Stores*/}
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
                    title = "Beach Print Shop"
                    coordinate = {{latitude: 33.78437261706521, longitude: -118.10844770761423}}
                    pinColor = "blue"
                />
                {/*Stores*/}

                {/* Student Institutions */}
                <Marker
                    title = "University Student Union"
                    coordinate = {{latitude: 33.781394139038255, longitude: -118.11363452819558}}
                    pinColor = "grey"
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
                    title = "Student Health Services"
                    coordinate = {{latitude: 33.78254101100577, longitude: -118.11787996775904}}
                    pinColor = "grey"
                />
                {/* Institutions */}

                {/*Dorm area */}
                <Marker 
                    title = "International House"
                    coordinate = {{latitude: 33.781813932732575, longitude: -118.12100002756084}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Visitor Center"
                    coordinate={{latitude: 33.78206452019229, longitude: -118.11929157681293}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Los Cerritos Hall"
                    coordinate = {{latitude: 33.7824320471612, longitude: -118.11907048320572}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Hillside Dining Hall"
                    coordinate = {{latitude: 33.78318751385211, longitude:-118.11954830170669}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Los Alimitos Hall"
                    coordinate = {{latitude: 33.783401527510534, longitude: -118.11870072370508}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Hillside College"
                    coordinate = {{latitude: 33.783158318914275, longitude: -118.11946041543574}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Parkside College"
                    coordinate = {{latitiude: 33.78696478554438, longitude: -118.12008537012139}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Parkside Dining Hall"
                    coordinate = {{latitude: 33.78697128043133, longitude: -118.12027654070549}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Parkside North"
                    coordinate = {{latitdue: 33.78824974154099, longitude: -118.11951647148983}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Housing and Residental Life Office"
                    coordinate = {{latitude: 33.783419486826354, longitude: -118.11991579897325}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Isabel Patterson Child Development Center"
                    coordinate={{latitude: 33.78830669627805, longitude: -118.12049046791749}}
                    pinColor = "grey"
                />
                {/*Dorm Area */}

                {/*The Arts*/}
                <Marker
                    title = "University Theatre"
                    coordinate = {{latitude: 33.77679903325372, longitude: -118.11153607049577}}
                    pinColor = "cyan"
                />
                <Marker
                    title = "Gatov Gallery"
                    coordinate = {{latitude: 33.77765760271764, longitude: -118.1123342336445}}
                    pinColor = "cyan"
                />
                <Marker 
                    title = "California Repertory Company"
                    coordinate = {{latitude: 33.776507195852545, longitude: -118.11260245449769}}
                    pinColor = "cyan"
                />
                <Marker 
                    title = "Martha B. Knoebel Dance Theatre"
                    coordinate = {{latitude: 33.788527642618874, longitude: -118.11331865481107}}
                    pinColor = "cyan"
                />
                <Marker 
                    title = "Gerald R. Daniel Recital Hall"
                    coordinate = {{latitude: 33.78770730313167, longitude: -118.11302361183581}}
                    pinColor = "cyan"
                />
                <Marker 
                    title = "Musical Theatre West"
                    coordinate = {{latitude: 33.788344850261474, longitude: -118.11233696636619}}
                    pinColor = "cyan"
                />
                <Marker 
                    title = "Carpenter Performing Arts Center"
                    coordinate = {{latitude: 33.78827351654503, longitude: -118.11168787184089}}
                    pinColor = "cyan"
                />
                <Marker
                    title = "Bob Cole Conservatory of Music"
                    coordinate = {{latitude: 33.7872614631498, longitude: -118.11256763634887}}
                    pinColor = "cyan"
                />
                <Marker 
                    title = "Carolyn Campagna Kleefeld Contemporary Art Museum"
                    coordinate = {{latitude: 33.78348405592135, longitude: -118.11471822142283}}
                    pinColor = "cyan"
                />
                {/*The Arts*/}

                {/*Atheltics*/}
                <Marker 
                    title = "Barrett Athletic Administration Building"
                    coordinate = {{latitude: 33.78647173074106, longitude: -118.11490130697034}}
                    pinColor = "green"
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
                    title = "George Allen Field"
                    coordinate = {{latitude: 33.785996861998946, longitude: -118.110697264747}}
                    pinColor = "green"
                />
                <Marker 
                    title = "Soccer and Softball Club House"
                    coordinate = {{latitude: 33.78677700599612, longitude: -118.11206775074483}}
                    pinColor = "green"
                />
                {/*Atheltics*/}

                {/*Dining*/}
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
                <Marker 
                    title = "The Chartroom"
                    coordinate = {{latitude: 33.78072824900645, longitude: -118.11439221725203}}
                    pinColor = "orange"
                />
                <Marker 
                    title = "Pollo Loco"
                    coordinate = {{latitude: 33.781288656517646, longitude: -118.11359157786976}}
                    pinColor = "orange"
                />
                <Marker 
                    title = "The Coffee Bean & Tea Leaf"
                    coordinate = {{latitude: 33.78115043601451, longitude: -118.11315974224236}}
                    pinColor = "orange"
                />
                {/*Dining*/}

                {/*General Parking Lots*/}
                <Marker
                    title = "Parking, Transportation, and Events Services"
                    coordinate = {{latitude: 33.7853063340804, longitude: -118.11622314122997}}
                    pinColor = "purple"
                />
                <Marker
                    title = "General 1"
                    coordinate = {{latitude: 33.7817022693597, longitude: -118.11934491506094}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 2"
                    coordinate = {{latitude: 33.78393159077944, longitude: -118.12078257904273 }}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 3"
                    coordinate = {{latitude: 33.78305770372613, longitude: -118.11716696128155}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 4"
                    coordinate = {{latitude: 33.784448785083455, longitude: -118.11836859087828}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 5"
                    coordinate = {{latitude: 33.78488572264806, longitude: -118.11643740039116}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 6"
                    coordinate = {{latitude: 33.78547424728388, longitude: -118.11753174162924}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 7"
                    coordinate = {{latitude: 33.78682962192349, longitude: -118.11754247046493}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 8"
                    coordinate = {{latitude: 33.78738692438853, longitude: -118.11756392813689}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 9"
                    coordinate = {{latitude: 33.788100266202505, longitude: -118.11721524097713}}
                    pinColor = "purple"
                />
                <Marker
                    title = "General 10"
                    coordinate = {{latitude: 33.78799772369316, longitude: -118.12007984016344}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 11"
                    coordinate = {{latitude: 33.78771238733553, longitude: -118.1156863818726}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 12"
                    coordinate = {{latitude: 33.78790186861178, longitude: -118.1106384644855}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 13"
                    coordinate = {{latitude: 33.78736620932004, longitude: -118.10846725770554}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "General 14"
                    coordinate = {{latitude: 33.78606371209624, longitude: -118.10850946078669}}
                    pinColor = "purple"
                />
                <Marker
                    title = "Palo Verde North Parking Structure"
                    coordinate = {{latitude: 33.78761358354249, longitude: -118.109528347719}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Palo Verde South Parking Structure"
                    coordinate = {{latitude: 33.786169052021435, longitude: -118.10907773662954}}
                    pinColor = "purple"
                />
                {/*General Parking Lots*/}

                {/*Residence Parking Lots*/}
                <Marker 
                    title = "Residence 1 Parking Lot"
                    coordinate = {{latitude: 33.78292624383255, longitude: -118.11878154878552}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Residence 2 Parking Lot"
                    coordinate = {{latitude: 33.785922395582524, longitude: -118.11927507528542}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Residence 3 Parking Lot"
                    coordinate = {{latitude: 33.7855567993545, longitude: -118.1183094800937}}
                    pinColor = "purple"
                />
                {/*Residence Parking Lots*/}

                {/*Employee Parking Lots*/}
                <Marker 
                    title = "Employee Parking Lot 1"
                    coordinate = {{latitdue: 33.78356699695567, longitude: -118.11665162650583}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Employee Parking Lot 2"
                    coordinate = {{latitude: 33.78249915466813, longitude: -118.11400160399504}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Employee Parking Lot 3"
                    coordinate = {{latitude: 33.78364475023127, longitude: -118.11259456290709}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Employee Parking Lot 4"
                    coordinate = {{latitude: 33.78434474753005, longitude: -118.11178990023072}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Employee Parking Lot 6"
                    coordinate = {{latitude: 33.782578469419775, longitude: -118.1084282221336}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Employee Parking Lot 7"
                    coordinate = {{latitude: 33.7786458452091, longitude: -118.1117863477463}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Employee Parking Lot 8"
                    coordinate = {{latitude: 33.77588130744563, longitude: -118.11200092450086}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Employee Parking Lot 9"
                    coordinate = {{latitude: 33.77659474508107, longitude: -118.1149835407597}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Employee Parking Lot 10"
                    coordinate = {{latitude: 33.77967137687648, longitude: -118.11484406595054}}
                    pinColor = "purple"
                />
                {/*Employee Parking Lots*/}

                {/*Landmarks*/}
                <Marker
                    title = "Lyman Lough Fountain"
                    coordinate = {{latitude: 33.78239537942915, longitude: -118.11475672687686}}
                    pinColor = "yellow"
                />
                <Marker 
                    title = "Go Beach Sign"
                    coordinate = {{latitude: 33.78195842917447, longitude: -118.1144241329775}}
                    pinColor = "yellow"
                />
                <Marker
                    title = "Earl Burns Miller Japanese Garden"
                    coordinate = {{latitude: 33.7852887152407, longitude: -118.11983588680643}}
                    pinColor = "yellow"
                />
                {/*Landmarks*/}

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