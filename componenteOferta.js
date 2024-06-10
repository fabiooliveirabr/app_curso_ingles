import {View, Text, StyleSheet}
        from "react-native";

const Oferta = ({nome, precoAntigo, precoNovo})=>{
    return(
        <View style={estilos.caixaOferta}>
            <Text style={{color: "white",
                          fontSize: 35
            }}>
                {nome}
            </Text>
            <Text style={{color:'white',
                          fontSize:20,
                          textDecorationLine: "line-through"
            }}>
                R$ {precoAntigo}
            </Text>
            <Text style={{color:"white",
                          fontSize: 35,
                          fontWeight: 800
            }}>
                R$ {precoNovo}
            </Text>
        </View>
    );
}
const estilos = StyleSheet.create({
    caixaOferta:{
        backgroundColor: "red",
        width: 270,
        height: 200,
        borderRadius: 40,
        marginRight: 20,
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30
    }
});

export default Oferta;