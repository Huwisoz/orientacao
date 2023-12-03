import { VStack, Text, Image, Box, Button} from "native-base";
import { StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../assets/logo.png'
import { TEMAS } from "../estilos/temas";


export default function Principal({navigation}) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
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
