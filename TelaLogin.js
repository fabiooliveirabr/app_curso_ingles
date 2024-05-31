import { View, Text, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function TelaLogin(){
    return(
        
        <View style={estilos.container}>
            <Text>Está é a tela login</Text>
            <StatusBar style="auto"/>
        </View>
        
    );
}
const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center"
    }
});