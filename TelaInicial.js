import { View, Text, StyleSheet, ImageBackground, TouchableOpacity} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function TelaInicial({navigation}){
    return(
        
        <View style={estilos.container}>
            <ImageBackground
                source={require('./assets/imagem1.jpg')}
                style={estilos.cxImagem1}
                imageStyle={estilos.Imagem1}
            >
                <Text style={{color: "white", 
                              fontSize:50, 
                              fontWeight: 900, 
                              marginLeft: 30,
                              marginBottom: 30}}>
                    Fácil e{'\n'}
                    rápido{'\n'}
                    Comece a{'\n'}
                    aprender{'\n'}
                    Inglês agora!
                    
                </Text>  

            </ImageBackground>

            <TouchableOpacity style={estilos.botao}
                onPress={()=>{navigation.navigate("Tela Login")}}
            >
                <Text style={{
                    color: "white", 
                    fontSize: 25,
                    fontWeight: 700}}>
                        Começar
                </Text>
            </TouchableOpacity>

            <StatusBar style="auto"/>
        </View>        
    );
}
const estilos = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center"
    },
    cxImagem1:{
        justifyContent: "flex-end",
        width: "100%",
        height: "85%",
    },
    Imagem1:{
        width: "100%",
        height: "100%",
        borderBottomRightRadius: 70
    },
    botao:{
        backgroundColor: "#553893",
        width: "65%",
        marginTop: 30,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center'
    }
});