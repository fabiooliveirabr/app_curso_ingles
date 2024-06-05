import 
    {View, Text, StyleSheet,
    TouchableOpacity, 
    Alert} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tarefas=({status, titulo, desc})=>{
    if(status == "1"){
        return(
            <View style={estilos.cxTarefaAtiva}>
                <Text style={estilos.titulo}>
                    {titulo}
                </Text>

                <Text style={estilos.descricao}>
                    {desc}
                </Text>

                <TouchableOpacity style={estilos.btnAtivado}>
                    <Ionicons
                        name="play"
                        size={35}
                        color="#05E118" />
                    <Text style={{marginTop:8}}>
                        Começar
                    </Text>
                </TouchableOpacity>


            </View>
        );
    }else{
        return(
            <View style={estilos.cxTarefaBloqueada}>                

                <Text style={estilos.titulo}>
                    {titulo}
                </Text>

                <Text style={estilos.descricao}>
                    {desc}
                </Text>

                <TouchableOpacity 
                style={estilos.btnDesativado}
                onPress={()=>{Alert.alert(
                            "Aviso",
                            "Você deve concluir a tarefa anterior!")}}>
                    <Ionicons
                        name="lock-closed"
                        size={35}
                        color="#b5b5b5" />
                    <Text style={{marginTop:8}}>
                        Começar
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const estilos = StyleSheet.create({
    titulo:{
        color:  "white",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20,
    },
    descricao:{
        color:  "white",
        fontSize: 15,
        marginTop: 30
    },
    btnAtivado:{
        backgroundColor: "#AA93DD",
        flexDirection: "row",
        padding: 8,
        width: 130,
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 30
    },
    btnDesativado:{
        backgroundColor: "#6F6582",
        flexDirection: "row",
        padding: 8,
        width: 130,
        justifyContent: "center",
        borderRadius: 20,
        marginTop: 30
    },
    cxTarefaAtiva:{
        backgroundColor: "#553893",
        width: 250,
        height: 250,
        borderRadius: 20,
        padding: 25,
        marginRight: 30
    },
    cxTarefaBloqueada:{
        backgroundColor: "#b5b5b5",
        width: 250,
        height: 250,
        borderRadius: 20,
        padding: 25,
        marginRight: 30
    }
});

export default Tarefas;