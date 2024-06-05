import { View, Text, StyleSheet, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import Tarefas from "./componenteTarefa";

export default function TelaTarefas(){
    const navigation = useNavigation();
    return(
        <View style={estilos.container}>

            <View style={estilos.cxTarefa}>
                <Ionicons
                    name="arrow-back"
                    size={33}
                    color={"#F2A4F6"}
                    onPress={()=>{navigation.navigate("Tela Modulos")}}
                    style={{
                            marginTop: 35,
                            marginLeft: 20
                          }}
                />
                <View style={estilos.cxDetalhes}>
                    <View style={estilos.cx1}>
                        <Text style={{color: "white",
                                     fontSize: 30,
                                     fontWeight: 800}}>
                            UNIDADE 1
                        </Text>
                        <Text style={{color: "#F2A4F6"}}>
                            Falsos cognatos
                        </Text>
                    </View>
                    <View style={estilos.cx2}>
                        <Text style={{color: "#FFF200"}}>10h</Text>
                    </View>
                </View>

            </View>

            <ScrollView horizontal={true}
                style={{marginTop:40,
                        marginLeft: 40}}
            >
                <Tarefas status="1"/>
                <Tarefas status="0"/>
                <Tarefas status="0"/>
                <Tarefas status="0"/>
                <Tarefas status="0"/>
                <Tarefas status="0"/>
            </ScrollView>


            <StatusBar style="auto"/>
        </View>        
    );
}
const estilos = StyleSheet.create({
    cxDetalhes:{
        flexDirection: "row",
        flex: 1,
        marginLeft: 20,
        marginTop: 80
    },
    cx1:{
        width: "70%"
    },
    cx2:{
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 80,
        borderWidth: 1,
        borderColor: "#F2A4F6"
    },

    cxTarefa:{
        backgroundColor: "#553893",
        height:  "30%",
        borderBottomRightRadius: 50
    },
    container:{
        flex: 1,
    }
});