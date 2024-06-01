import { View, Text, StyleSheet, 
    ImageBackground, TouchableOpacity,
    Alert} from "react-native";
import { TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";

export default function TelaLogin({navigation}){
    var usuarioDigitado="";
    var senhaDigitada="";
    function fazerLogin(){
        if(usuarioDigitado == "admin" && senhaDigitada=="1234"){
            navigation.navigate("Tela Modulos");
        }else{
            Alert.alert("Aviso","Usuário e/ou senha incorretos!")
        }
    }

    return(        
        <View style={estilos.container}>
            <ImageBackground
                source={require('./assets/imagem2.jpg')}
                style={estilos.cxImagem2}
                imageStyle={estilos.Imagem2}
            >
            </ImageBackground>

            <View style={estilos.cxLogin}>
                <TextInput 
                    onChangeText={(texto)=>{usuarioDigitado=texto}}
                    mode="outlined"
                    style={{width: 300, marginBottom:20}}
                    label="usuario"/>

                <TextInput 
                    onChangeText={(texto)=>{senhaDigitada=texto}}
                    mode="outlined"
                    style={{width: 300, marginBottom:50}}
                    label="senha"/>
                <TouchableOpacity 
                    onPress={()=>{fazerLogin()}}
                    style={estilos.botao} >
                    <Text style={{
                        color: "white",
                        fontSize: 20
                    }}>
                        Entrar
                    </Text>
                </TouchableOpacity>


            </View>

            <StatusBar style="auto"/>
        </View>      
    );
}
const estilos = StyleSheet.create({
    container:{
        flex: 1,
    },
    cxImagem2:{
        height: "50%",
        width: "100%",
    },
    Imagem2:{
        height: "100%",
        width: "100%"
    },
    cxLogin:{
        backgroundColor: "white",
        width: "100%",
        flex: 1,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        marginTop: -60,
        justifyContent: "center",
        alignItems: "center"
    },
    botao:{
        backgroundColor: "#553893",
        width: 300,
        borderRadius: 30,
        padding: 15,
        alignItems: "center"
    }
});