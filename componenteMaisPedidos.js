import {View, 
        Text, 
        StyleSheet,
        Image
    } from "react-native";
//Criar o componente mais pedidos
const MaisPedidos = ()=>{
    return(        
        <View style={estilos.caixaPrincipal}>
            <View style={estilos.caixaEsquerda}>
                <Text style={estilos.titulo}>Nome do produto</Text>
                <Text style={estilos.preco}>R$ 1.999,90</Text>
                <Text style={estilos.descricao}>Descrição do produto...</Text>
            </View>
            
            <View style={estilos.caixaDireita}>
                <Image
                    source={require("./assets/notebook.jpg")}
                    style={estilos.imagem}
                />
            </View>
        </View>
    );
}
const estilos = StyleSheet.create({
    titulo:{
        fontSize: 30,
        color: "white"
    },
    preco:{
         color: "white",
         fontSize: 25,
         fontWeight: "bold"
    },
    descricao:{
         color: "white"
    },
    imagem:{
        width: 140,
        height: 140
    },
    caixaEsquerda:{
        width: "50%"
    },
    caixaDireita:{
        width: "50%",
        backgroundColor: "white",
        height: "100%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    caixaPrincipal:{
        padding: 20,
        flexDirection: "row",
        width: "90%",
        height: 200,
        backgroundColor: "red",
        borderRadius: 20,
        margin: "auto",
        marginBottom: 20
    }
});

export default MaisPedidos;
