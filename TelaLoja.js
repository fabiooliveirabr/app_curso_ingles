import {View, Text, StyleSheet,
        TextInput, TouchableOpacity,
        ScrollView} from "react-native";
import {StatusBar} from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";
import Oferta from "./componenteOferta";
import Categoria from "./componenteCategoria";
import MaisPedidos from "./componenteMaisPedidos";

export default function TelaLoja(){
    return(
        <ScrollView style={estilos.container}>
            
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

            <Text style={{fontSize:25,
                          margin: 15
            }}> 
                Ofertas
            </Text>

            <ScrollView horizontal={true} style={{maxHeight:220}}>
                    <Oferta nome="Smartphone" 
                            precoAntigo="1999,90"
                            precoNovo="1.699,90"/>

                    <Oferta nome="Notebook I5" 
                            precoAntigo="2.299,90"
                            precoNovo="1.399,90"/>

                    <Oferta nome="Geladeira 480L" 
                            precoAntigo="5.299,90"
                            precoNovo="4.699,90"/>

                    <Oferta nome="Mesa 6 cadeiras" 
                            precoAntigo="1.199,90"
                            precoNovo="949,90"/>
             
            </ScrollView>
            {/* Fim da ScrollView das ofertas */}
            
            <Text style={{fontSize:25,
                          margin: 15
            }}> 
                Categorias
            </Text>

            <ScrollView horizontal={true}>
                <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/>
                <Categoria/>
            </ScrollView>
            {/* Fim da ScrollView das categorias */}

            <Text style={{fontSize:25,
                          margin: 15
            }}> 
                Mais pedidos
            </Text>

            <MaisPedidos/>
            <MaisPedidos/>
            <MaisPedidos/>
            <MaisPedidos/>
            <MaisPedidos/>
            <MaisPedidos/>        
            

            <StatusBar style="auto"/>
        </ScrollView>
        // Fim do container
    );
}

const estilos = StyleSheet.create({
    cxOfertas:{
        backgroundColor: "yellow",
        height: 200
    },
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