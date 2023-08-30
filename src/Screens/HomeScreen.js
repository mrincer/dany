import { View,Text, StyleSheet, Image, TextInput } from "react-native";
import { EvilIcons } from '@expo/vector-icons';


const HomeScreen = () => {
    return (
        <View style = {{flex: 1}}>
            {/* Avatar */}
            <View style = {{marginTop: 30, 
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 10
                }}>

            <Text style ={{fontSize: 18, fontWeight: '600'}}>Vamos a descubrir</Text>
            <Image
            style = {{width:40, height:40}} 
            source={require('../../assets/images/avatar.png')} />
            </View>

            {/* Buscador */}
            <View style={{
                flexDirection: 'row', 
                borderColor: 'grey', 
                borderWidth: 1,
                borderRadius: 20,
                marginHorizontal: 10,
                alignItems: 'center',
                marginTop: 30
                }}>
            <EvilIcons 
                style = {{marginBottom: 4}} 
                name="search" 
                size={40} 
                color="grey" />
                <TextInput
                    style = {{flex: 1, paddingRight: 10}} 
                    placeholder="Buscar destino"
                    placeholderTextColor={'gray'}
                />
            </View>

        </View>

    )
}

export default HomeScreen;

const styles = StyleSheet.create({})