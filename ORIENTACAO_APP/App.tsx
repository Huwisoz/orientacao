// Importação de bibliotecas e componentes necessários
import { TEMAS } from './src/estilos/temas';
import { NativeBaseProvider, StatusBar } from 'native-base'; 
import CadastroOrientador from './src/tabs/CadastroOrientador';
import CadastroAluno from './src/tabs/CadastroAluno';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import React from 'react';
import MyTabs from './src/RotaCadastro';

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
          <Stack.Screen name='Rotas' component={MyTabs}/>
        </Stack.Navigator>
      </NavigationContainer>

    </NativeBaseProvider>
  );
}
