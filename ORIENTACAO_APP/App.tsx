// Importação de bibliotecas e componentes necessários
import { TEMAS } from './src/estilos/temas';
import { NativeBaseProvider, StatusBar,VStack} from 'native-base'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import React from 'react';
import MyTabs from './src/RotaCadastro';
import Principal from './src/tabs/Relatorios';
import Relatorios from './src/tabs/CadastroRelatorios';

// Cria um objeto StackNavigator
const Stack = createStackNavigator();

// Função de componente principal do aplicativo
export default function App() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[600]}/>

      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Cadastro' component={MyTabs}/>
            <Stack.Screen name='Home' component={Principal}/>
            <Stack.Screen name='Relatorio' component={Relatorios}/>
          </Stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  );
}
