import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CadastroOrientador from './tabs/CadastroOrientador';
import CadastroAluno from './tabs/CadastroAluno';
import Principal from './tabs/Principal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Principal"
      tabBarPosition='bottom'
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: '#FFF' },
        tabBarShowIcon: true
      }}
    >
      <Tab.Screen
        name="Principal"
        component={Principal}
        options={{ tabBarLabel: 'Principal' ,
                  tabBarIcon: () => (
                  <Icons name='home' size={25} color='blue' />
                  ),
      }}
      />
      <Tab.Screen
        name="CadastroA"
        component={CadastroAluno}
        options={{ tabBarLabel: 'Cadastro Aluno',
                    tabBarIcon: () => (
                    <Icon name='user-graduate' size={25} color='blue' />
                    ),
      }}
      />
      <Tab.Screen
        name="CadastroB"
        component={CadastroOrientador}
        options={{ tabBarLabel: 'Cadastro Orientador',
                  tabBarIcon: () => (
                  <Icon name='user-tie' size={25} color='blue' />
                  ),
       }}
      />
    </Tab.Navigator>
  );
}