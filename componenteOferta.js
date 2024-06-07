import {View, Text, StyleSheet}
        from "react-native";

const Oferta = ()=>{
    return(
        <View style={estilos.caixaOferta}>
            <Text>Nome do produto</Text>
            <Text>R$ 99,99</Text>
            <Text>R$ 49,99</Text>
        </View>
    );
}
const estilos = StyleSheet.create({
    caixaOferta:{
        backgroundColor: "red",
        width: 200,
        height: 200,
        borderRadius: 40,
        marginRight: 40
    }
});

export default Oferta;