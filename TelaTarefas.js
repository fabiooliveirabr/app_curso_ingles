import { View, Text, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function TelaTarefas(){
    return(
        <View style={estilos.container}>
            <Text>Está é a tela de tarefas</Text>
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