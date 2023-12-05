import { VStack, Box, Button, Select, Text, Image} from "native-base";
import { StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
// import FilePickerManager from 'react-native-file-picker';
import RNFS from 'react-native-fs';
import PDFView from 'react-native-pdf';

import { TEMAS } from "../estilos/temas";
import { EntradaTexto } from "../components/EntradaTexto";
import { useEffect, useState } from "react";
import Logo from '../assets/logo.png'
import { buscarUsuario } from "../servicos/buscarUsuario";
import api from "../servicos/api";


export default function Relatorios({navigation}) {
  const [titulo, setTitulo] = useState('');
  const [text, setText] = useState('');
  const [service, setService] = useState('');
  const [selectedFile, setSelectedFile] = useState<any>();
  const [listaAlunos, setListaAlunos] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {const alunos = await buscarUsuario();setListaAlunos(alunos)}
      catch(e){
        console.log(e);
      }
    }
    fetchData();},[]);

  // const pickDocument = async () => {
  //   try {
  //     const result = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.pdf],
  //     });

  //     console.log(result);

  //     setSelectedFile(result);
  //   } catch (err) {
  //     if ( DocumentPicker.isCancel(err)) {
  //       console.log(err)
  //       // Usuário cancelou a escolha do arquivo
  //     } else {
  //       throw err;
  //     }
  //   }
  // };

const submitDocument = async() => {
  try{
    const result = api.post('/api/orientacao', {
      titulo: titulo,
      texto: text,
      idAluno: service
    });

    navigation.replace('Home')
  } catch (e) {
    console.log(e);
  } 
};


  return (
    
    <VStack alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo App Orientação" size={100} borderRadius={25}/>
      <EntradaTexto label="Titulo" placeholder="Insira o nome do relatorio." value={titulo} onChangeText={setTitulo} />

      <Box>
      <Select selectedValue={service} minWidth="100%" marginTop={8} accessibilityLabel="Choose Service" placeholder="Selecione um aluno"  _selectedItem={{
        bg: "blue.200",
        //endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          
          {listaAlunos?.result.map(aluno=>(<Select.Item label={aluno.nome} value={aluno.idusuario}/>))}
        </Select>
      </Box>
      <EntradaTexto label="Texto" placeholder="Insira as orientações" value={text} onChangeText={setText}  />

      {/* <Text marginTop={8}>Arquivo Selecionado:</Text>
        <Button w="100%" bg={TEMAS.colors.blue[600]} mt={8} borderRadius='lg' onPress={pickDocument}>Selecionar Arquivo</Button > */}
      


      <Box w="100%" flexDirection="row" justifyContent="center" mt={4}>
      <Button w="100%" bg={TEMAS.colors.blue[600]} mt={8} borderRadius='lg'
      onPress={submitDocument}
      >Enviar Relatorio de Orientação
      </Button>
      </Box>
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
