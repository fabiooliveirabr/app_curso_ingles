import { View, Text, StyleSheet, ImageBackground, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import Modulos from "./componenteModulo";


export default function TelaModulos(){
    return(
        
        <View style={estilos.container}>
            <ImageBackground
                source={require('./assets/imagem3.jpg')}
                style={estilos.cxImagem3}
                imageStyle={estilos.imagem3}
            >
                <Text style={{color: "white",
                              fontSize: 20,
                              marginLeft: 20}}>
                    Inglês Básico
                </Text>

                <Text style={{color: "white", 
                              fontSize: 40, 
                              fontWeight:800,
                              marginLeft: 20,
                              marginBottom: 15}}>
                    Lista de módulos
                </Text>
            </ImageBackground>


                <ScrollView>
                    <View style={{alignItems:"center"}}>
                    <Modulos 
                    titulo="UNIDADE I"
                    desc="Falsos cognatos"
                    ch="15"
                    />
                    <Modulos 
                    titulo="UNIDADE II"
                    desc="Principais expressões da língua inglesa"
                    ch="20"
                    />
                    <Modulos 
                    titulo="UNIDADE III"
                    desc="Verbo To Be"
                    ch="10"
                    />
                    <Modulos 
                    titulo="UNIDADE IV"
                    desc="Verbo To Be"
                    ch="10"
                    />
                    <Modulos 
                    titulo="UNIDADE V"
                    desc="Verbo To Be"
                    ch="10"
                    />
                    <Modulos 
                    titulo="UNIDADE VI"
                    desc="Verbo To Be"
                    ch="10"
                    />

                    </View>
                </ScrollView>                
           

            <StatusBar style="auto"/>
        </View>
        
    );
}
const estilos = StyleSheet.create({
    cxImagem3:{
        width: '100%',
        height: "40%",
        justifyContent: "flex-end",        
    },
    imagem3:{
        width: "100%",
        height: "100%",
        borderBottomRightRadius: 60
    },
    container:{
        flex: 1,
    }
});