// Setting up our homepage using React Native Maps.
// Chloee Gong + Katrina Orevillo + Miguel Echeverria + Jocelyn Gonzalez
// Setting up map + initial routing: https://www.youtube.com/watch?v=i8bni7mUqXE
// Search bar: https://www.youtube.com/watch?v=bvn_HYpix6s&t=1s, https://www.youtube.com/watch?v=Wq3dO05jv6o

import * as React from "react";
import * as Location from 'expo-location'
import { Pressable, StyleSheet, Text, TextInputComponent, View } from "react-native";
import Constants from "expo-constants";
import MapView, { Marker, Polyline } from "react-native-maps"; // Chloee
import MapViewDirections from "react-native-maps-directions"; // Chloee
import { GOOGLE_MAPS_KEY } from '@env'; // Chloee
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"; // Chloee
const smileImage = require('../Lightguard-client/assets/smile.png') // Katrina
const flagImage = require('../Lightguard-client/assets/flag.png') // Katrina
const lightImage = require('../Lightguard-client/assets/bluelight.png') // Miguel
const steetLampImage = require('../Lightguard-client/assets/street-lamp.png') //Jocelyn
const sirenImage = require('../Lightguard-client/assets/siren.png') // Jocelyn
import NavBar from "./NavBar";

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

    {/*Start of array of coordinates for ADA paths by Miguel*/}

    const bell_7th = [
        {latitude: 33.782165530157954, longitude: -118.12080065231353},
        {latitude: 33.782114109339325, longitude: -118.1149456504733},
        {latitude: 33.78182875338096, longitude: -118.1146774296201},
        {latitude: 33.78147205710277, longitude: -118.11484909098749},
        {latitude: 33.78132457327888, longitude: -118.11501086431588},
        {latitude: 33.781035307589796, longitude: -118.11514862454332},
        {latitude: 33.78040807117033, longitude: -118.11520686564855},
        {latitude: 33.78040807117033, longitude: -118.11520686564855},
        {latitude: 33.77895685994329, longitude: -118.11521453833818},
        {latitude: 33.778762655564556, longitude: -118.11516867097787},
        {latitude: 33.778597677814865, longitude: -118.11498896298384},
        {latitude: 33.7783546694697, longitude: -118.1149540942686},
        {latitude: 33.77826549192242, longitude: -118.11505601820551},
        {latitude: 33.777971205352394, longitude: -118.11507479367069},
        {latitude: 33.77760334571538, longitude: -118.11515525993798},
        {latitude: 33.777471807636886, longitude: -118.1152276795729},
        {latitude: 33.777003619649165, longitude: -118.11525181945046},
    ];

    const bell_Beach = [
        {latitude: 33.78188934387241, longitude: -118.12212256816346},
        {latitude: 33.78189211772415, longitude: -118.11541183154684},
        {latitude: 33.78177619168245, longitude: -118.11574442544621},
    ];

    const beach_Library = [
        {latitude: 33.77763502101807, longitude: -118.11513112423324},
        {latitude: 33.777476729477904, longitude: -118.11436669470646},
      ];

    const deter_ParksideNorth = [
        {latitude: 33.78226379974979, longitude: -118.12080380502358},
        {latitude: 33.78354788752802, longitude: -118.12018153256669},
        {latitude: 33.784444062409584, longitude: -118.11953243795381},
        {latitude: 33.785099467932916, longitude: -118.11906036919339},
        {latitude: 33.785317935331356, longitude: -118.11892625874239},
        {latitude: 33.78544723210861, longitude: -118.11918911521629},
        {latitude: 33.78583957973847, longitude: -118.11901208942844},
        {latitude: 33.78640134705373, longitude: -118.11920520846678},
        {latitude: 33.7876809144199, longitude: -118.11921057287917},
    ];
    
    const commons_Village = [
        {latitude: 33.7869140679883, longitude: -118.119881125112},
        {latitude: 33.786905151128956, longitude: -118.1189638096799},
    ];
    
    const atherton_CDC = [
        {latitude: 33.788609088718985, longitude: -118.12024977100612},
        {latitude: 33.78822121215773, longitude: -118.1202444065884},
        {latitude: 33.78801347045731, longitude: -118.1204886148959},
        {latitude: 33.787801697516215, longitude: -118.12061736092146},
        {latitude: 33.787815072664856, longitude: -118.12083193763074},
    ];
    
    const g4_SSH = [
        {latitude: 33.784509273485774, longitude: -118.11934163212113},
        {latitude: 33.784094626897065, longitude: -118.118531605024},
        {latitude: 33.78398762099811, longitude: -118.11857720256246},
        {latitude: 33.783577430485515, longitude: -118.1177618110355},
        {latitude: 33.78349912228216, longitude: -118.11763577755656},
        {latitude: 33.783022049967, longitude: -118.11799251135078},
        {latitude: 33.78267204662878, longitude: -118.11815880830538},
        {latitude: 33.78213031889866, longitude: -118.11820172364587},
    ];
    
    const g3_Brotman = [
        {latitude: 33.78344458954183, longitude: -118.1176379099612},
        {latitude: 33.782667962941524, longitude: -118.11602156447599},
        {latitude: 33.78252751533189, longitude: -118.1160135178372},
        {latitude: 33.782132923199526, longitude: -118.11550389813522},
    ];
    
    const g6_Brotman = [
        {latitude: 33.78531052146516, longitude: -118.11888931899595},
        {latitude: 33.78370395731945, longitude: -118.11572598453392},
        {latitude: 33.78345650484663, longitude: -118.11509298320551},
        {latitude: 33.78317784129975, longitude: -118.114682605221},
        {latitude: 33.78176890451278, longitude: -118.114604821145},
    ];
    
    const g11_Brotman = [
        {latitude: 33.788549469946624, longitude: -118.11529157700394},
        {latitude: 33.78422722154439, longitude: -118.11523674782556},
    ];
    
    const g11_Walter_1 = [
        {latitude: 33.786717037346335, longitude: -118.11527341434896},
        {latitude: 33.786873082593466, longitude: -118.11434268787252},
        {latitude: 33.78699791858645, longitude: -118.11437219217005},
    ];
    
    const g11_Walter_2 = [
        {latitude: 33.78805232964647, longitude: -118.1152492744528},
        {latitude: 33.78817270555635, longitude: -118.11388671232912},
        {latitude: 33.78811162146641, longitude: -118.11385088567584},
        {latitude: 33.78750082299755, longitude: -118.11377846603648},
        {latitude: 33.78748967699962, longitude: -118.11388843659998},
    ];
    
    const walter_Carpenter = [
        {latitude: 33.78817270555635, longitude: -118.11388671232912},
        {latitude: 33.78820524712397, longitude: -118.11368995314392},
        {latitude: 33.787861952545775, longitude: -118.11366044884636},
        {latitude: 33.78796003685152, longitude: -118.11301135427297},
        {latitude: 33.787982328722485, longitude: -118.11272972229794},
        {latitude: 33.78792436984329, longitude: -118.11237298851877},
        {latitude: 33.78780697639188, longitude: -118.1114170929934},
        {latitude: 33.78812797936224, longitude: -118.11136613102495},
        {latitude: 33.788125750179084, longitude: -118.11146269054412},
    ];
    
    const walter_Engr2 = [
        {latitude: 33.787793601230646, longitude: -118.11130175799116},
        {latitude: 33.787327698872595, longitude: -118.11132053345322},
        {latitude: 33.78732546966863, longitude: -118.11158875433979},
        {latitude: 33.78716719603779, longitude: -118.11156193225113},
        {latitude: 33.78709809055793, longitude: -118.11148951261177},
        {latitude: 33.7832597995161, longitude: -118.1114850217318},
        {latitude: 33.78327006284734, longitude: -118.11143254105089},
        {latitude: 33.7832597995161, longitude: -118.11110839566891},
    ];
    
    const engr2_COB = [
        {latitude: 33.783601049535534, longitude: -118.11147819430332},
        {latitude: 33.783622836471636, longitude: -118.11336620839425},
        {latitude: 33.78370632081989, longitude: -118.11384248486094},
        {latitude: 33.783741411217086, longitude: -118.11437022834005},
        {latitude: 33.78376772900654, longitude: -118.11475020360173},
        {latitude: 33.78378966049155, longitude: -118.11502463017965},
        {latitude: 33.78392563557338, longitude: -118.11524628241561},
    ];
    
    const tennis_G12 = [
        {latitude: 33.78415718068712, longitude: -118.11149992745331},
        {latitude: 33.78413963557484, longitude: -118.10999058127493},
        {latitude: 33.78553884701044, longitude: -118.1099641940465},
        {latitude: 33.78562218490008, longitude: -118.11003280069097},
        {latitude: 33.78667486706922, longitude: -118.11003807812224},
        {latitude: 33.78678890685856, longitude: -118.10996947147774},
        {latitude: 33.786876629670054, longitude: -118.10981642588624},
    ];
    
    const e5 = [
        {latitude: 33.7844330191056, longitude: -118.10999372375436},
        {latitude: 33.78444617789505, longitude: -118.10816773152457},
    ];
      
    const tennis_Affairs = [
        {latitude: 33.784143525217566, longitude: -118.10998844633981},
        {latitude: 33.7840838433773, longitude: -118.10999742253551},
        {latitude: 33.78401134360346, longitude: -118.11010693370478},
        {latitude: 33.78396309445388, longitude: -118.11009769819496},
        {latitude: 33.78312530942265, longitude: -118.11009637883873},
        {latitude: 33.78233960609393, longitude: -118.1101138769595},
        {latitude: 33.78162244652961, longitude: -118.11012282182682},
    ];
    
    const affairs_Education = [
        {latitude: 33.78162244652961, longitude: -118.11012282182682},
        {latitude: 33.78161416057769, longitude: -118.11105517398174},
        {latitude: 33.78159899998135, longitude: -118.11186591378056},
        {latitude: 33.78160916862526, longitude: -118.11191135522324},
        {latitude: 33.78174571886934, longitude: -118.11171211197465},
        {latitude: 33.78190405877338, longitude: -118.11168414800993},
        {latitude: 33.78191858536098, longitude: -118.11137304890008},
    ];
    
    const engr2_Education = [
        {latitude: 33.7832597995161, longitude: -118.1114850217318},
        {latitude: 33.78248302894458, longitude: -118.1115005705607},
        {latitude: 33.78191649415121, longitude: -118.11150057056805},
    ];
    
    const business_Engr3 = [
        {latitude: 33.78360055506475, longitude: -118.11515637156475},
        {latitude: 33.78359609646267, longitude: -118.11505444762784},
        {latitude: 33.783515841585775, longitude: -118.1149954390328},
        {latitude: 33.78333303852983, longitude: -118.11491497276683},
        {latitude: 33.7832750765038, longitude: -118.11481036662106},
        {latitude: 33.78322157306033, longitude: -118.11470576047529},
        {latitude: 33.783234948924346, longitude: -118.1146655273423},
        {latitude: 33.78322380237113, longitude: -118.11461992979157},
        {latitude: 33.783188133391185, longitude: -118.11459578991182},
        {latitude: 33.783121254013736, longitude: -118.11453141689901},
        {latitude: 33.783036540060664, longitude: -118.11438925982912},
        {latitude: 33.783003100319256, longitude: -118.1142578315947},
        {latitude: 33.78296074328933, longitude: -118.1141237211292},
        {latitude: 33.78284927733526, longitude: -118.1139440131352},
        {latitude: 33.78279354430383, longitude: -118.11375894072343},
        {latitude: 33.78276456311316, longitude: -118.11352290634323},
        {latitude: 33.7827690217585, longitude: -118.11349608425459},
        {latitude: 33.782497043960596, longitude: -118.11350144863552},
        {latitude: 33.78250373194943, longitude: -118.11317690136275},
        {latitude: 33.78250150262079, longitude: -118.11256803994097},
        {latitude: 33.78249086060167, longitude: -118.11149605682787},
    ];
    
    const USU = [
        {latitude: 33.78248264074763, longitude: -118.11342109180704},
        {latitude: 33.78203900291358, longitude: -118.11343182064252},
        {latitude: 33.78203900291358, longitude: -118.1135578844592},
        {latitude: 33.78203677357191, longitude: -118.11374295687094},
        {latitude: 33.78194537051418, longitude: -118.11376173233302},
        {latitude: 33.78169345426034, longitude: -118.11376977896023},
    ];
    
    const walk_Education = [
        {latitude: 33.782148240580135, longitude: -118.11343718504328},
        {latitude: 33.782159387273296, longitude: -118.11252791623777},
        {latitude: 33.78216384594919, longitude: -118.11150063018354},
    ];
    
    const usu_Nugget = [ 
        {latitude: 33.780832024454696, longitude: -118.11384108546844},
        {latitude: 33.78027690876155, longitude: -118.11384108546545},
        {latitude: 33.7802813675364, longitude: -118.11410394193432},
    ];
    
    const science = [
        {latitude: 33.780147344717456, longitude: -118.1131702626431},
        {latitude: 33.78014957410828, longitude: -118.1130200589466},
        {latitude: 33.78003587510183, longitude: -118.11302810557318},
        {latitude: 33.780040333889225, longitude: -118.11299860127568},
    ];
    
    const science_Success = [
        {latitude: 33.780130202037505, longitude: -118.11310595456622},
        {latitude: 33.77962412871351, longitude: -118.11326956931026},
        {latitude: 33.779590687637366, longitude: -118.11317569200227},
        {latitude: 33.77945357909683, longitude: -118.11322128955233},
    ];
    
    const success_Psychology = [
        {latitude: 33.77962412871351, longitude: -118.11326956931026},
        {latitude: 33.77938892621035, longitude: -118.11334467117123},
        {latitude: 33.77942682618222, longitude: -118.11349085155442},
        {latitude: 33.779524920149846, longitude: -118.11350158039758},
        {latitude: 33.779586228822104, longitude: -118.11367860618273},
        {latitude: 33.77962301400441, longitude: -118.1137872356418},
        {latitude: 33.77949705255638, longitude: -118.11378723564965},
        {latitude: 33.779509314298345, longitude: -118.11392805161512},
    ];
    
    const psychology_Library = [
        {latitude: 33.77947378117989, longitude: -118.11372451720484},
        {latitude: 33.77904012861242, longitude: -118.11385337965962},
        {latitude: 33.77730939091626, longitude: -118.11441602631905},
    ];
    
    const peterson_McIntosh = [
        {latitude: 33.77883327858466, longitude: -118.11278582274876},
        {latitude: 33.77688385313634, longitude: -118.11340234376551},
        {latitude: 33.776867762198265, longitude: -118.11334426833892},
    ];
    
    const arts_Language = [ 
        {latitude: 33.7782247540423, longitude: -118.11257315568864},
        {latitude: 33.77696365880754, longitude: -118.11298113243933},
        {latitude: 33.77693415877955, longitude: -118.11288756647428},
    ];
    
    const peterson_Academic = [
        {latitude: 33.779357287364554, longitude: -118.11333099705203},
        {latitude: 33.777351481388116, longitude: -118.11395710222283},
    ];
    
    const courtyard_UT = [
        {latitude: 33.777351481388116, longitude: -118.11395710222283},
        {latitude: 33.77711118931378, longitude: -118.11295544731725},
        {latitude: 33.77695252515677, longitude: -118.11229767245308},
        {latitude: 33.77679423235545, longitude: -118.11237009209248},
    ];
    
    const courtyard_Arts = [
        {latitude: 33.777393544740576, longitude: -118.11396386993886},
        {latitude: 33.77800096043628, longitude: -118.11305870318549},
    ];
    
    const office2_Arts = [
        {latitude: 33.778772965764325, longitude: -118.11394622857472},
        {latitude: 33.778688247510324, longitude: -118.11356535491579},
        {latitude: 33.778708312367534, longitude: -118.11349025306754},
        {latitude: 33.778567549187976, longitude: -118.11287146355795},
        {latitude: 33.778400341623374, longitude: -118.11218213584529},
    ];
    
    const theatre_Library = [
        {latitude: 33.776343085919684, longitude: -118.11290528095137},
        {latitude: 33.77625390627819, longitude: -118.1129401496666},
        {latitude: 33.77669534460014, longitude: -118.1147640517653},
        {latitude: 33.77690268605544, longitude: -118.1147667339818},
        {latitude: 33.777007471336944, longitude: -118.11524416717468},
    ];
    
    const center_Microbiology = [
        {latitude: 33.77934456927299, longitude: -118.11327203189218},
        {latitude: 33.77904165865879, longitude: -118.1119517228954},
        {latitude: 33.778894516836104, longitude: -118.11199732044612},
        {latitude: 33.77885215777969, longitude: -118.11176933269252},
    ];

    {/*End of array of coordinates for ADA paths by Miguel*/}

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
                {/* Jocelyn */}
                {/* Work Review 4 - added 10 more lamps to upper campus*/}
                <Marker
                    title = "Lamp - Horn Center N"
                    coordinate = {{latitude: 33.783743, longitude: -118.114116}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Horn Center N"
                    coordinate = {{latitude: 33.783743, longitude: -118.114116}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - SHSS"
                    coordinate = {{latitude: 33.782107, longitude:  -118.118155}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Lower Campus Stairs"
                    coordinate = {{latitude: 33.780268, longitude:  -118.113092}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Library W"
                    coordinate = {{latitude: 33.777512, longitude: -118.115217}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - LA2 W"
                    coordinate = {{latitude: 33.777997, longitude: -118.115082}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - LA5 S"
                    coordinate = {{latitude: 33.778711, longitude: -118.114145}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Central Quad W1"
                    coordinate = {{latitude: 33.778623, longitude: -118.113576}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Central Quad Middel"
                    coordinate = {{latitude: 33.778185, longitude:  -118.113361}}
                    image={steetLampImage}
                />
                <Marker
                    title = "Lamp - Brotman E"
                    coordinate = {{latitude: 33.782579, longitude:  -118.114675}}
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
                
                {/* Beginning of ADA path polylines by Miguel*/}

                <Polyline
                    coordinates = {bell_7th}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {bell_Beach}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {beach_Library}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {deter_ParksideNorth}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {commons_Village}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {atherton_CDC}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {g4_SSH}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {g3_Brotman}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {g6_Brotman}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {g11_Brotman}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {g11_Walter_1}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {g11_Walter_2}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {walter_Carpenter}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {walter_Engr2}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {engr2_COB}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {tennis_G12}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {e5}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />  

                <Polyline
                    coordinates = {tennis_Affairs}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {affairs_Education}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {engr2_Education}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {business_Engr3}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {USU}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline 
                    coordinates = {walk_Education}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {usu_Nugget}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {science}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {science_Success}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline 
                    coordinates = {success_Psychology}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {peterson_McIntosh}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {arts_Language}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {peterson_Academic}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {courtyard_UT}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {courtyard_Arts}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {office2_Arts}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {theatre_Library}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                <Polyline
                    coordinates = {center_Microbiology}
                    strokeColor = "#007AFF"
                    strokeWidth = {3}
                />

                {/* End of ADA path polylines by Miguel*/}

                {/* Crime Hotspots */}
                {/* Katrina + Jocelyn */}
                <Marker 
                    title = "🚨 Crime Reported" // Katrina
                    coordinate={{latitude: 33.78682962192349, longitude: -118.117}} // Katrina
                    image={sirenImage} // Jocelyn
                    description="ROBBERY Reported on 4/2/22 at 10:17 PM" // Katrina
                />

                {/* Beginning of Map markers */}
                {/* Miguel (Coordinates) */}
                {/* Katrina (Near-To Index) */}
                

                {/*Stores*/}
                <Marker
                    title = "CSULB Bookstore"
                    coordinate = {{latitude: 33.78008155620075, longitude: -118.11433773815789,}}
                    pinColor = "blue"
                    description="Near to: Amazon Hub, The Nugget Pub & Grill"
                />
                <Marker
                    title = "CSULB Art Store"
                    coordinate = {{latitude: 33.77795055536601, longitude: -118.11197028975022}}
                    pinColor = "blue"
                    description="Near to: Gatov Gallery, Central Quad"
                />
                <Marker 
                    title = "Beach Print Shop"
                    coordinate = {{latitude: 33.78437261706521, longitude: -118.10844770761423}}
                    pinColor = "blue"
                    description="Near to: Student Recreation and Wellness Center"
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
                    description="Near to: El Pollo Loco"
                />
                <Marker
                    title = "CSULB University Library"
                    coordinate = {{latitude: 33.77715748396334, longitude: -118.11440225169851}}
                    pinColor = "grey"
                    description="Near to: Central Quad, California Repertory Company"
                />
                <Marker
                    title = "Brotman Hall"
                    coordinate = {{latitude: 33.783095366206354, longitude: -118.11550847702843}}
                    pinColor = "grey"
                    description="Near to: Lyman Lough Fountain, Go Beach Sign"
                />
                <Marker 
                    title = "Student Health Services"
                    coordinate = {{latitude: 33.78254101100577, longitude: -118.11787996775904}}
                    pinColor = "grey"
                    description="Near to: Los Cerritos Hall, Visitor Center"
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
                    description="Near to: Visitor Center"
                />
                <Marker 
                    title = "Visitor Center"
                    coordinate={{latitude: 33.78206452019229, longitude: -118.11929157681293}}
                    pinColor = "grey"
                    description="Near to: International House, Student Health Services"
                />
                <Marker 
                    title = "Los Cerritos Hall"
                    coordinate = {{latitude: 33.7824320471612, longitude: -118.11907048320572}}
                    pinColor = "grey"
                    description="Near to: Los Alamitos Hall, Hillside College"
                />
                <Marker
                    title = "Hillside Dining Hall"
                    coordinate = {{latitude: 33.78318751385211, longitude:-118.11954830170669}}
                    pinColor = "grey"
                    description="Near to: Hillside College, Housing and Residential Life Office"
                />
                <Marker 
                    title = "Los Alamitos Hall"
                    coordinate = {{latitude: 33.783401527510534, longitude: -118.11870072370508}}
                    pinColor = "grey"
                    description="Near to: Los Cerritos Hall, Hillside College"
                />
                <Marker 
                    title = "Hillside College"
                    coordinate = {{latitude: 33.783158318914275, longitude: -118.11946041543574}}
                    pinColor = "grey"
                    description="Near to: Hillside Dining Hall, Housing and Residential Life Office"
                />
                <Marker
                    title = "Parkside College"
                    coordinate = {{latitiude: 33.78696478554438, longitude: -118.12008537012139}}
                    pinColor = "grey"
                    description="Near to: Parkside Dining Hall, Isabel Patterson Child Development Center"
                />
                <Marker
                    title = "Parkside Dining Hall"
                    coordinate = {{latitude: 33.78697128043133, longitude: -118.12027654070549}}
                    pinColor = "grey"
                    description="Near to: Parkside College, Isabel Patterson Child Development Center"
                />
                <Marker 
                    title = "Parkside North"
                    coordinate = {{latitdue: 33.78824974154099, longitude: -118.11951647148983}}
                    pinColor = "grey"
                    description="Near to: Parkside Dining Hall, Isabel Patterson Child Development Center"
                />
                <Marker
                    title = "Housing and Residental Life Office"
                    coordinate = {{latitude: 33.783419486826354, longitude: -118.11991579897325}}
                    pinColor = "grey"
                    description="Near to: Hillside College, Hillside Dining Hall"
                />
                <Marker 
                    title = "Isabel Patterson Child Development Center"
                    coordinate={{latitude: 33.78830669627805, longitude: -118.12049046791749}}
                    pinColor = "grey"
                    description="Near to: Parkside North, Parkside Dining Hall"
                />
                {/*Dorm Area */}

                {/*The Arts*/}
                <Marker
                    title = "University Theatre"
                    coordinate = {{latitude: 33.77679903325372, longitude: -118.11153607049577}}
                    pinColor = "cyan"
                    description="Near to: Gatov Gallery"
                />
                <Marker
                    title = "Gatov Gallery"
                    coordinate = {{latitude: 33.77765760271764, longitude: -118.1123342336445}}
                    pinColor = "cyan"
                    description="Near to: University Theater"
                />
                <Marker 
                    title = "California Repertory Company"
                    coordinate = {{latitude: 33.776507195852545, longitude: -118.11260245449769}}
                    pinColor = "cyan"
                    description="Near to: University Library"
                />
                <Marker 
                    title = "Martha B. Knoebel Dance Theatre"
                    coordinate = {{latitude: 33.788527642618874, longitude: -118.11331865481107}}
                    pinColor = "cyan"
                    description="Near to: Gerald R. Daniel Recital Hall"
                />
                <Marker 
                    title = "Gerald R. Daniel Recital Hall"
                    coordinate = {{latitude: 33.78770730313167, longitude: -118.11302361183581}}
                    pinColor = "cyan"
                    description="Near to: Bob Cole Conservatory of Music"
                />
                <Marker 
                    title = "Musical Theatre West"
                    coordinate = {{latitude: 33.788344850261474, longitude: -118.11233696636619}}
                    pinColor = "cyan"
                    description="Near to: Carpenter Performing Arts Center"
                />
                <Marker 
                    title = "Carpenter Performing Arts Center"
                    coordinate = {{latitude: 33.78827351654503, longitude: -118.11168787184089}}
                    pinColor = "cyan"
                    description="Near to: Musical Theatre West"
                />
                <Marker
                    title = "Bob Cole Conservatory of Music"
                    coordinate = {{latitude: 33.7872614631498, longitude: -118.11256763634887}}
                    pinColor = "cyan"
                    description="Near to: Gerald R. Daniel Recital Hall"
                />
                <Marker 
                    title = "Carolyn Campagna Kleefeld Contemporary Art Museum"
                    coordinate = {{latitude: 33.78348405592135, longitude: -118.11471822142283}}
                    pinColor = "cyan"
                    description="Near to: Horn Center, Brotman Hall"
                />
                {/*The Arts*/}

                {/*Atheltics*/}
                <Marker 
                    title = "Barett Athletic Administration Building"
                    coordinate = {{latitude: 33.78647173074106, longitude: -118.11490130697034}}
                    pinColor = "green"
                    description="Near to: Walter Pyramid, Baseball Field"
                />
                <Marker 
                    title = "Walter Pyramid"
                    coordinate = {{latitude: 33.78710202775871, longitude: -118.11456526691019}}
                    pinColor = "green"
                    description="Near to: Baseball Field, Barett Athletic Administration Building"
                />
                <Marker
                    title = "Baseball Field"
                    coordinate = {{latitude: 33.786414627192, longitude: -118.11337633312556}}
                    pinColor = "green"
                    description="Near to: Walter Pyramid, Softball Field"
                />
                <Marker 
                    title = "Softball Field"
                    coordinate = {{latitude: 33.78631151663152, longitude: -118.11200130544826}}
                    pinColor = "green"
                    description="Near to: George Allen Field, Soccer and Softball Club House"
                />
                <Marker
                    title = "Track and Field"
                    coordinate = {{latitude: 33.78474765787074, longitude: -118.11461695958864}}
                    pinColor = "green"
                    description="Near to: Carolyn Campagna Kleefeld Contemporary Art Museum"
                />
                <Marker
                    title = "Ken Lindgren Aquatics Center"
                    coordinate={{latitude: 33.78384541869399, longitude: -118.11254924879574}}
                    pinColor = "green"
                    description="Near to: Rhodes Tennis Courts"
                /> 
                <Marker 
                    title = "Rhodes Tennis Courts"
                    coordinate = {{latitude: 33.784687508885945, longitude: -118.11058492349595}}
                    pinColor = "green"
                    description="Near to: Ken Lindgren Aquatics Center"
                />
                <Marker
                    title = "Life Fit Center @ The Beach"
                    coordinate = {{latitiude: 33.78328688488456, longitude: -118.1119289354493}}
                    pinColor = "green"
                    description="Near to: Ken Lindgren Aquatics Center"
                />
                <Marker 
                    title = "Student Recreation and Wellness Center"
                    coordinate = {{latitude: 33.78504840216096, longitude: -118.10920989569456}}
                    pinColor = "green"
                    description="Near to: Beach Print Shop"
                />
                <Marker 
                    title = "Hardfact Hill"
                    coordinate={{latitude: 33.780643409616545, longitude: -118.11203129233265}}
                    pinColor = "green"
                    description="Near to: The Coffee Bean & Tea Leaf"
                />
                <Marker 
                    title = "Central Quad"
                    coordinate ={{latitude: 33.77803965450117, longitude: -118.11352004410354}}
                    pinColor = "green"
                    description="Near to: CSULB University Library, Gatov Gallery"
                />
                <Marker 
                    title = "George Allen Field"
                    coordinate = {{latitude: 33.785996861998946, longitude: -118.110697264747}}
                    pinColor = "green"
                    description="Near to: Softball Field, Rhodes Tennis Courts"
                />
                <Marker 
                    title = "Soccer and Softball Club House"
                    coordinate = {{latitude: 33.78677700599612, longitude: -118.11206775074483}}
                    pinColor = "green"
                    description="Near to: Softball Field, Bob Cole Conservatory of Music"
                />
                {/*Atheltics*/}

                {/*Dining*/}
                <Marker 
                    title = "The Outpost Grill"
                    coordinate = {{latitude: 33.78262839754427, longitude: -118.11017035252026}}
                    pinColor = "orange"
                    description="Near to: Vivian Engineering Center"
                />
                <Marker 
                    title = "The Nugget Grill & Pub"
                    coordinate = {{latitude: 33.780406214630815, longitude: -118.11451005576808}}
                    pinColor = "orange"
                    description="Near to: CSULB Bookstore, The Chartroom"
                />
                <Marker 
                    title = "The Chartroom"
                    coordinate = {{latitude: 33.78072824900645, longitude: -118.11439221725203}}
                    pinColor = "orange"
                    description="Near to: The Nugget Grill & Pub"
                />
                <Marker 
                    title = "El Pollo Loco"
                    coordinate = {{latitude: 33.781288656517646, longitude: -118.11359157786976}}
                    pinColor = "orange"
                    description="Near to: University Student Union"
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
                    description="Near to: Brotman Hall"
                />
                <Marker 
                    title = "Go Beach Sign"
                    coordinate = {{latitude: 33.78195842917447, longitude: -118.1144241329775}}
                    pinColor = "yellow"
                    description="Near to: University Student Union"
                />
                <Marker
                    title = "Earl Burns Miller Japanese Garden"
                    coordinate = {{latitude: 33.7852887152407, longitude: -118.11983588680643}}
                    pinColor = "yellow"
                    description="Near to: Parkside College"
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

        <NavBar/>


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