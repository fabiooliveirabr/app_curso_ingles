import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./TelaInicial";
import TelaLogin from "./TelaLogin";
import TelaModulos from "./TelaModulos";
import TelaTarefas from "./TelaTarefas";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela Modulos">
          <Stack.Screen name="Tela Inicial" component={TelaInicial} options={{headerShown:false}}/>
          <Stack.Screen name="Tela Login" component={TelaLogin} options={{headerShown:false}}/>
          <Stack.Screen name="Tela Modulos" component={TelaModulos} options={{headerShown:false}}/>
          <Stack.Screen name="Tela Tarefas" component={TelaTarefas} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

