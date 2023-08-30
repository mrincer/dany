import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const WelcomeScreen = () => {
    return(
        <View style = {styles.page}>
            <ImageBackground
            style = {styles.bgImage}
            source={require('../../assets/images/welcome.png')}
            >
            <LinearGradient
                // Background Linear Gradient
                colors={['transparent','rgba(3, 105, 161, 0.8)']}
                style={{width:'100%', height:'100%', position:'absolute'}}
            />
            <View style = {{marginHorizontal: 10, marginBottom: 20}}>
            <Text style={styles.title}>Viajar es fácil</Text>  
              <Text style={styles.subtitle}>
                 Vive la mejor aventura del mundo con nosotros.</Text>
            </View>

            <TouchableOpacity
                style = {styles.buttonContainer}
            >
                <Text style = {styles.buttonText}>Vamos!</Text>

            </TouchableOpacity>

            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    bgImage : {
        width: '100%', 
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        color: 'white', 
        fontSize: 40
    },
    subtitle: {
        color: 'white', 
        fontSize: 20
    },
    buttonContainer: {
        backgroundColor: 'orange',
        alignSelf: 'center',
        paddingVertical : 10,
        paddingHorizontal: 24,
        borderRadius: 20,
        marginBottom: 40
    },
    buttonText: {color: 'white'}
});

export default WelcomeScreen;