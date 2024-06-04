import { View, Text, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Modulos = ({titulo, desc, ch, x}) =>{
    if(x == "1"){
        return(
            <Text>Retorno 1</Text>
        );
    }else{
        return(
            <Text>Retorno 2</Text>
        );
        
    }
    // return (
    //     <View style={estilos.cxModulo}>
        
    //         <View style={{width:"80%"}}>
    //             <Text style={{color: "white",
    //                           fontSize: 25,
    //                           fontWeight: 900
    //             }}>
    //                 {titulo}
    //             </Text>
    //             <Text style={{color: "#F2A4F6"}}>
    //                 {desc}
    //             </Text>
    //             <Ionicons
    //                 name="play"
    //                 size={33}
    //                 color="#05e118"
    //             />
    //         </View>

    //         <View style={estilos.cxHoras}>
    //             <Text style={{color:"#FFF200"}}>
    //                 {ch}h
    //             </Text>
    //         </View>

    //     </View>
    // );
}

const estilos = StyleSheet.create({
    cxHoras:{
        borderWidth: 1,
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#F2A4F6",
        borderRadius: 70
    },
    cxModulo:{
        flexDirection: "row",
        backgroundColor: "#553893",
        marginTop: 30,
        width: "85%",
        padding: 20,
        justifyContent: "center",
        borderRadius: 20
    }
});

export default Modulos;