import { VStack, Text, Image, Box} from "native-base";
import { StyleSheet, TouchableOpacity} from 'react-native';
import Logo from '../assets/logo.png'
import { CommonActions } from "@react-navigation/native";
import { TEMAS } from "../estilos/temas";

export default function Principal(navigation) {
  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      <Image source={Logo} alt="Logo App Orientação" size={250} borderRadius={100}/>

      <Text fontSize="5xl" fontWeight="bold" color="blue.600" textAlign="center" mt={5}>
        Bem vindo!
      </Text>

      <Box w="100%" flexDirection="row" justifyContent="center" mt={4}>
        <Text>Para mais informações: </Text>
        <TouchableOpacity onPress={() => navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: '' }]
          })
        )}>
          <Text color={TEMAS.colors.blue[600]}>Clique Aqui!</Text>
        </TouchableOpacity>
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
