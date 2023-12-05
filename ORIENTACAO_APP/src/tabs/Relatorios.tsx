import { VStack, Text, Image, Box, Button} from "native-base";
import { ScrollView, View} from 'react-native';
import Logo from '../assets/logo.png'
import { TEMAS, estilo } from "../estilos/temas";
import React, { useEffect, useState } from "react";
import api from "../servicos/api";
// const {BarChart, Grid} = require("react-native-svg-charts")

export default function Principal({navigation}) {
  const [orientacoes, setOrientacoes] = useState<any>()

  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
  

function contarObjetosPorDia(objetos) {
  const respostaFinal = Array(7).fill(0); // Inicializa o array com zeros

   const dataAtual = new Date();

  // Inicializa o array com 7 posições
  const arrayDatas = Array.from({ length: 7 }, (_, index) => {
    const data = new Date(dataAtual);
    data.setDate(data.getDate() - index);
    return data;
  });

  // Preenche o array com a contagem de objetos para cada dia
  objetos.forEach(objeto => {
    const dataObjeto = new Date(objeto.data);
    const diffDias = Math.floor((Date.now() - dataObjeto.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDias === 0) {
      respostaFinal[diffDias]++;
    }
  });

  return respostaFinal;
}

// console.log(!!orientacoes ? contarObjetosPorDia(orientacoes): null)

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
    <VStack style={estilo.scrollContainer}>
      <ScrollView>
        {!!orientacoes ? (
        <>
        <Box width="100%" justifyContent="center">
        <Button w="100%" bg={TEMAS.colors.blue[600]} 
        onPress={() => navigation.replace('Relatorio')}
        >Criar Orientação
        </Button>
        </Box>

          <Box>
            <Text style={estilo.tituloCard}>Orientações da semana</Text>
            
            {/* <BarChart
            style={{ height: 200 }}
              gridMin={-100}
              gridMax={120}
              data={data}
              svg={{ fill: 'rgb(134, 65, 244)' }}
              contentInset={{ top: 30, bottom: 30 }}>
              <Grid />
          </BarChart> */}
          {contarObjetosPorDia(orientacoes).map((logs) => (
            <Text>{logs}</Text>
          ))}
          </Box>

        <Box>
        <Text style={estilo.titulo}>Orientações</Text>
        <VStack >
            <View style={estilo.container}>
              {orientacoes?.map((orient) => (
                <View key={orient.idorientacao} style={estilo.card}>
                  <Text style={estilo.titulo}>{orient.titulo}</Text>
                  <Text style={estilo.texto}>{orient.text}</Text>
                  <Text style={estilo.data}>{orient.data}</Text>
                </View>
              ))}
            </View>
          {/* {orientacoes?.map(orient => (
            <Box key={orient.idorientacao}><Text>{orient.titulo}</Text>

            <Text>{orient.text}</Text>
            <Text>{orient.data}</Text>
            </Box>
            
          ))} */}

        </VStack>
        </Box></>
      
        ) : (
        <>
        <Image source={Logo} alt="Logo App Orientação" size={200} borderRadius={100}/>

        <Text fontSize="5xl" fontWeight="bold" color="blue.600" textAlign="center" mt={5}>
          Bem vindo!
        </Text>

        <Box w="100%" flexDirection="row" justifyContent="center" mt={4}>
        <Button 
          w="100%"
          bg={TEMAS.colors.blue[600]} 
          mt={8}
          borderRadius='lg'
          onPress={() => navigation.replace('Relatorio')}
        >
        Criar Orientação
        </Button>
        </Box>
        </>
        )}
      </ScrollView>  
      <Box style={estilo.botaoSair}
          //  w="100%" flexDirection="row" justifyContent="center" mt={4}
         >
        <Button 
          w="100%"
          bg={TEMAS.colors.blue[350]} 
          
          borderRadius='lg'
          onPress={() => navigation.replace('login')}
        >
          Sair
        </Button>
        </Box>
    </VStack>
  );
}

