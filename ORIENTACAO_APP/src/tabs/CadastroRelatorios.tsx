import { VStack, Box, Button, Select, Text, Image} from "native-base";
import { StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
// import FilePickerManager from 'react-native-file-picker';
import RNFS from 'react-native-fs';
import PDFView from 'react-native-pdf';

import { TEMAS } from "../estilos/temas";
import { EntradaTexto } from "../components/EntradaTexto";
import { useState } from "react";
import Logo from '../assets/logo.png'


export default function Relatorios({navigation}) {
  const [titulo, setTitulo] = useState('');
  const [service, setService] = useState('');
  const [selectedFile, setSelectedFile] = useState<any>();

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

  // const pickDocument = () => {
  //   FilePickerManager.showFilePicker({}, (response) => {
  //     if (response.didCancel) {
  //       console.log('Seleção cancelada');
  //     } else if (response.error) {
  //       console.log('Erro ao selecionar o arquivo:', response.error);
  //     } else {
  //       // O objeto `response` conterá informações sobre o arquivo selecionado
  //       console.log(response);

  //       setSelectedFile(response);
  //     }
  //   });
  // };


  return (
    
    <VStack alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo App Orientação" size={100} borderRadius={25}/>
      <EntradaTexto label="Titulo" placeholder="Insira o nome do relatorio." value={titulo} onChangeText={setTitulo} />

      <Box>
      <Select selectedValue={service} minWidth="100%" marginTop={8} accessibilityLabel="Choose Service" placeholder="Choose Service"  _selectedItem={{
        bg: "blue.200",
        //endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="Hugo" value="1" />
          <Select.Item label="Felipe" value="2" />
          <Select.Item label="Wiegue" value="3" />
          <Select.Item label="Souza" value="4" />
        </Select>
      </Box>

      {/* <Text marginTop={8}>Arquivo Selecionado:</Text>
        <Button w="100%" bg={TEMAS.colors.blue[600]} mt={8} borderRadius='lg' onPress={pickDocument}>Selecionar Arquivo</Button > */}
      


      <Box w="100%" flexDirection="row" justifyContent="center" mt={4}>
      <Button w="100%" bg={TEMAS.colors.blue[600]} mt={8} borderRadius='lg'
      onPress={() => navigation.navigate('Home')}
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
