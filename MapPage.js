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
const lightImage = require('../Lightguard-client/assets/bluelight.png') // Miguel

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
                <Marker 
                    title = "Corner Market"
                    coordinate = {{latitude: 33.78150563933455, longitude: -118.11419413471067}}
                    pinColor = "blue"
                />
                <Marker 
                    title = "Bookstore Convenience Store"
                    coordinate = {{latitude: 33.77981616796349, longitude: -118.11387508034942}}
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
                <Marker
                    title = "Horn Center"
                    coordinate = {{latitude: 33.78324466158666, longitude: -118.11414312421232}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Academic Services"
                    coordinate = {{latitude: 33.7767954201005, longitude: -118.1138694581425}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "CSULB Research Foundation"
                    coordinate = {{latitude: 33.78126679149684, longitude: -118.1103578104239}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Student Success Center"
                    coordinate = {{latitude: 33.77944982838584, longitude: -118.11305487462116}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Alumni Center"
                    coordinate = {{latitude: 33.78180333759347, longitude: -118.11694025455486}}
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
                    title = "General 15"
                    coordinate = {{latitude: 33.77794171263901, longitude: -118.11164391560301}}
                    pinColor = "purple"
                />
                <Marker 
                    title = "Pyramid Parking Structure"
                    coordinate = {{latitude: 33.7857490387966, longitude: -118.11568881784517}}
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

                {/*Faculty Offices*/}
                <Marker 
                    title = "Faculty Office 2"
                    coordinate = {{latitude: 33.77866436604255, longitude: -118.11387958081058}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Faculty Office 3"
                    coordinate = {{latitude: 33.779145192259435, longitude: -118.11372988645677}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Faculty Office 4"
                    coordinate = {{latitude: 33.778124935989304, longitude: -118.11206879569679}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Faculty Office 5"
                    coordinate = {{latitude: 33.779081925808875, longitude: -118.11239024894527}}
                    pinColor = "grey"
                />
                {/*Faculty Offices*/}

                {/*College of Art*/}
                <Marker 
                    title = "Fine Arts 1"
                    coordinate = {{latitude: 33.77721977714551, longitude: -118.1125945086345}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Fine Arts 2"
                    coordinate = {{latitude: 33.77749177169494, longitude: -118.11238529634296}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Fine Arts 3"
                    coordinate = {{latitude: 33.7778618612522, longitude: -118.11211171103865}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Fine Arts 4"
                    coordinate = {{latitude: 33.77824086697292, longitude: -118.11277689883738}}
                    pinColor = "grey"
                />
                {/*College of Art*/}

                {/*College of Business*/}
                <Marker 
                    title = "College of Business"
                    coordinate = {{latitude: 33.78400783491321, longitude: -118.11592210130944}}
                    pinColor = "grey"
                />
                {/*College of Business*/}

                {/*College of Education*/}
                <Marker 
                    title = "Language Arts"
                    coordinate = {{latitude: 33.77683184897635, longitude: -118.11254086451949}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Education 2"
                    coordinate = {{latitude: 33.775706056565376, longitude: -118.11420500284946}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Bob and Barbara Ellis Education Building"
                    coordinate = {{latitude: 33.77628336436989, longitude: -118.11405140425266}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "College of Professional and Continuing Education"
                    coordinate = {{latitude: 33.78197535454163, longitude: -118.11123042964367}}
                    pinColor = "grey"
                />
                {/*College of Education*/}

                {/*College of Engineering*/}
                <Marker 
                    title = "Vivian Engineering Center"
                    coordinate = {{latitude: 33.78287216859522, longitude: -118.11042157643493}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Engineering 2"
                    coordinate = {{latitiude: 33.78315306244651, longitude: -118.1107058905747}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Engineering 3"
                    coordinate = {{latitude: 33.78374159896689, longitude: -118.11121551023957}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Engineering and Computer Science"
                    coordinate = {{latitude: 33.78356325499698, longitude: -118.11022577515243}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Engineering Technology"
                    coordinate = {{latitude: 33.783014844954394, longitude: -118.10905633204442}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Human Design"
                    coordinate = {{latitude: 33.782719854507235, longitude: -118.10969404338314}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Design"
                    coordinate = {{latitude: 33.78212101812283, longitude: -118.10938266928451}}
                    pinColor = "grey"
                />
                {/*College of Engineering*/}

                {/*College of Health and Human Services*/}
                <Marker 
                    title = "Nursing"
                    coordinate = {{latitude: 33.78169310254641, longitude: -118.11745431950753}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Family and Consumer Sciences"
                    coordinate = {{latitude: 33.78176901997287, longitude: -118.11608931006417}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Kinesology"
                    coordinate = {{latitude: 33.78312622937097, longitude: -118.11248136512131}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Health and Human Services 1"
                    coordinate = {{latitude: 33.78237339054128, longitude: -118.11292537374946}}
                    pinColor = "grey"
                />
                <Marker   
                    title = "Health and Human Services 2"
                    coordinate = {{latitude: 33.78243665456273, longitude: -118.11211347224975}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Social Science/Public Affairs"
                    coordinate = {{latitude: 33.782046772244236, longitude: -118.11069367217141}}
                    pinColor = "grey"
                />
                {/*College of Health and Human Services*/}

                {/*College of Liberal Arts*/}
                <Marker
                    title = "Psychology"
                    coordinate = {{latitude: 33.77924220073388, longitude: -118.11418150666374}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Peterson Hall"
                    coordinate = {{latitude: 33.779073490278314, longitude: -118.11320722482935}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Liberal Arts 5"
                    coordinate = {{latitude: 33.77885627508054, longitude: -118.11422463894334}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Liberal Arts 4"
                    coordinate = {{latitude: 33.77857790139468, longitude: -118.11422463895167}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Liberal Arts 3"
                    coordinate = {{latitude: 33.77822571520099, longitude: -118.11429060597276}}
                    pinColor = "grey"
                />
                <Marker
                    title = "Liberal Arts 2"
                    coordinate = {{latitude: 33.777983190941804, longitude: -118.11448343257894}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Liberal Arts 1"
                    coordinate = {{latitude: 33.77763732907129, longitude: -118.11459506903515}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Lecture Halls"
                    coordinate = {{latitude: 33.778177210405424, longitude: -118.11396838254484}}
                    pinColor = "grey"
                />
                <Marker
                    title = "College of Liberal Arts Adminstration"
                    coordinate = {{latitude: 33.77781447800355, longitude: -118.11415106037934}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Multimedia Center"
                    coordinate = {{latitiude: 33.776781342087695, longitude: -118.11460596595074}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "McIntosh Humanities Building"
                    coordinate = {{latitude: 33.776895944490676, longitude: -118.11322486651447}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Language Arts Lab"
                    coordinate = {{latitude: 33.77692125172217, longitude: -118.11277324629202}}
                    pinColor = "grey"
                />
                {/*College of Liberal Arts*/}

                {/*College of Natural Sciences and Mathematics*/}
                <Marker 
                    title = "Molecular and Life Sciences"
                    coordinate = {{latitude: 33.780164693039325, longitude: -118.11244163978098}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Hall of Science"
                    coordinate = {{latitude: 33.78004653526271, longitude: -118.11286811099036}}
                    pinColor = "grey"
                />
                <Marker 
                    title = "Microbiology"
                    coordinate = {{latitude: 33.779463923701066, longitude: -118.11177653906492}}
                    pinColor = "grey"
                />
                {/*College of Natural Sciences and Mathematics*/}

                {/*Blue Lights & Safety*/}
                <Marker 
                    title = "University Police"
                    coordinate = {{latitude: 33.784331751063014, longitude: -118.10911222496516}}
                    pinColor = "red"
                />
                <Marker
                    title = "Parkside Blue Light"
                    coordinate = {{latitude: 33.78691723321143, longitude: -118.11959855093804}}
                    pinColor = "blue"
                    image = {lightImage}
                />
                <Marker 
                    title = "G8 & 9 Blue Light"
                    coordinate = {{latitude: 33.7878163182607, longitude: -118.11805031939947}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "G7 Blue Light"
                    coordinate = {{latitude: 33.78694524741096, longitude: -118.11638730812477}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "G6 Blue Light"
                    coordinate = {{latitude: 33.785632096074444, longitude: -118.1176946797564}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "G5 Blue Light"
                    coordinate = {{latitude: 33.78435533825395, longitude: -118.11699200250361}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "G3 Blue Light"
                    coordinate = {{latitude: 33.783361268575035, longitude: -118.11762985309798}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "Hillside Blue Light"
                    coordinate = {{latitude: 33.783081288841494, longitude: -118.11979007240407}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "G1 Blue Light"
                    coordinate = {{latitude: 33.78169428491899, longitude: -118.11921245405695}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "COB Blue Light"
                    coordinate = {{latitude: 33.783839468352355, longitude: -118.11526716771307}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "GO BEACH Blue Light"
                    coordinate = {{latitude: 33.78178121509987, longitude: -118.11468864680077}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker
                    title = "H&HS Blue Light"
                    coordinate = {{latitude: 33.7821646621626, longitude: -118.11265553239969}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "Arts Center Blue Light"
                    coordinate = {{latitude: 33.78788082834977, longitude: -118.11188361051634}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "G12 Blue Light"
                    coordinate = {{latitude: 33.788581962128525, longitude: -118.11056232990369}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "G13 Blue Light"
                    coordinate = {{latitude: 33.78731907227487, longitude: -118.10856325931915}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "G14 Blue Light"
                    coordinate = {{latitude: 33.786164336721875, longitude: -118.1085793525667}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "SRWC Blue Light"
                    coordinate = {{latitude: 33.784907697401344, longitude: -118.1100212745718}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "COE Blue Light"
                    coordinate = {{latitude: 33.783159105815564, longitude: -118.11042349237964}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "Design Blue Light"
                    coordinate = {{latitude: 33.782282375899555, longitude: -118.10870133901967}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "Outpost Blue Light"
                    coordinate = {{latitude: 33.78217536774267, longitude: -118.11050378344402}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "G15 Blue Light"
                    coordinate = {{latitude: 33.778207869037786, longitude: -118.11171662267053}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "Fine Art 1 Blue Light"
                    coordinate = {{latitude: 33.77703736852293, longitude: -118.11234349409487}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker
                    title = "E8 Blue Light"
                    coordinate = {{latitude: 33.77619016504688, longitude: -118.11325008069156}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "Liberal Arts 3 Blue Light"
                    coordinate = {{latitude: 33.778336232763365, longitude: -118.11425113121322}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                <Marker 
                    title = "LH Blue Light"
                    coordinate = {{latitude: 33.77828049678519, longitude: -118.11353229919222}}
                    image = {lightImage}
                    pinColor = "blue"
                />
                {/*Blue Lights*/}

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