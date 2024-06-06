import {View, Text, StyleSheet,
        TextInput, TouchableOpacity} from "react-native";
import {StatusBar} from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TelaLoja(){
    return(
        <View style={estilos.container}>
            
            <View style={estilos.cxVermelhaTopo}>
                
                {/* Início da caixa1Topo */}
                <View style={estilos.caixa1Topo}>
                    <View style={estilos.cxPessoa}>
                        <Ionicons
                            name="person"
                            size={40}
                            color="#c17b7b"
                        />
                    </View>

                    <View style={estilos.cxBemVindo}>
                        <Text style={{color:"white"}}>
                            Bem vindo,
                        </Text>
                        <Text style={{color:"white", 
                                      fontSize: 20,
                                      fontWeight: "bold"}}>
                            Fulano de Tal
                        </Text>
                    </View>
                    {/* Fim da cxBemVindo */}
                </View>
                {/* Fim da caixa1Topo */}

                {/* Inicio da caixa2Topo */}
                <View style={estilos.caixa2Topo}>
                    <TextInput
                        placeholder="Pesquisar"
                        style={estilos.cxPesquisar}/>

                    <TouchableOpacity style={estilos.botaoPesquisar}>
                        <Ionicons
                            name="search"
                            size={30}
                            color="#626262"
                        />
                    </TouchableOpacity>
                </View>
                {/* Fim da caixa2Topo */}

            </View>
            {/* Fim da caixaVermelhaTopo */}


            <StatusBar style="auto"/>
        </View>
    );
}

const estilos = StyleSheet.create({
    botaoPesquisar:{
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10
    },
    cxPesquisar:{
        backgroundColor: "white",
        borderRadius: 10,
        width: "80%"
    },
    caixa2Topo:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginTop: 40,
        padding: 4
    },  

    cxPessoa:{
        backgroundColor: "yellow",
        padding: 10,
        borderRadius: 100,
        marginRight: 10
    },
    caixa1Topo:{
        flexDirection: "row",
        width: "90%",
        marginTop: 60
    },  
    cxVermelhaTopo:{
        backgroundColor: "red",
        height: 260,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: "center"
    },
    container:{
        flex: 1,
    }
});