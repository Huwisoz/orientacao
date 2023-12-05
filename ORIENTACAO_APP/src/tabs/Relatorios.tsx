import { VStack, Text, Image, Box, Button} from "native-base";
import { StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../assets/logo.png'
import { TEMAS } from "../estilos/temas";
import React, { useEffect, useState } from "react";
import api from "../servicos/api";
const {BarChart, Grid} = require("react-native-svg-charts")

export default function Principal({navigation}) {
  const [orientacoes, setOrientacoes] = useState<any>()
const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  useEffect(() => {
    const fecthData = async() => {
      try{
        const res = await api.get('api/orientacao');
        setOrientacoes(res.data.result);
        console.log(res);
      } catch(err){console.log(err)}

    }
    fecthData();
    }, [])

  return (
    <VStack  alignItems="center" p={5} justifyContent="center">
      {!!orientacoes ? (
      <><Box w="100%"  justifyContent="center" >
      <Button w="100%" bg={TEMAS.colors.blue[600]} 
      onPress={() => navigation.navigate('Relatorio')}
      >Criar Orientação
      </Button>
      </Box>

        <Box>
          <Text>Orientações da semana</Text>
          
          <BarChart
           style={{ height: 200 }}
            gridMin={-100}
            gridMax={120}
            data={data}
            svg={{ fill: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 30, bottom: 30 }}>
            <Grid />
        </BarChart>
        </Box>

      <Box>
      <Text>Orientações</Text>
      <VStack>
        {orientacoes?.map(orient => (
          <Box key={orient.idorientacao}><Text>{orient.titulo}</Text>

          <Text>{orient.text}</Text>
          <Text>{orient.data}</Text>
          </Box>
          
        ))}
      </VStack></Box></>
      ) : (
      <>
      <Image source={Logo} alt="Logo App Orientação" size={200} borderRadius={100}/>

      <Text fontSize="5xl" fontWeight="bold" color="blue.600" textAlign="center" mt={5}>
        Bem vindo!
      </Text>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={4}>
      <Button w="100%" bg={TEMAS.colors.blue[600]} mt={8} borderRadius='lg'
      onPress={() => navigation.navigate('Relatorio')}
      >Criar Orientação
      </Button>

      </Box>
      </>
      )}
      
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
