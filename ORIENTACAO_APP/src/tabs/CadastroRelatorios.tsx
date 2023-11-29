import { VStack, Box, Button, Select, Text} from "native-base";
import { StyleSheet } from 'react-native';
import DocumentPicker from 'react-native-document-picker/package.json';

import { TEMAS } from "../estilos/temas";
import { EntradaTexto } from "../components/EntradaTexto";
import { useState } from "react";
import { Botao } from "../components/Botao";

export default function Relatorios({navigation}) {
  const [titulo, setTitulo] = useState('');
  const [service, setService] = useState('');
  const [selectedFile, setSelectedFile] = useState<any>();

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });

      console.log(result);

      setSelectedFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Usuário cancelou a escolha do arquivo
      } else {
        throw err;
      }
    }
  };

  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
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

      <Text marginTop={8}>Arquivo Selecionado:</Text>
        <Button w="100%" bg={TEMAS.colors.blue[600]} mt={8} borderRadius='lg' onPress={pickDocument}>Selecionar Arquivo</Button >
      


      <Box w="100%" flexDirection="row" justifyContent="center" mt={4}>
      <Button w="100%" bg={TEMAS.colors.blue[600]} mt={8} borderRadius='lg'
      onPress={() => navigation.navigate('Relatorios')}
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
