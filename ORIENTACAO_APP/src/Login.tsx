import { VStack, Text, Image, Box , Button, Link, useToast} from "native-base";
import { TouchableOpacity } from "react-native";
import Logo from './assets/logo.png';
import { TEMAS } from './estilos/temas';
import { CommonActions} from "@react-navigation/native"
import { EntradaTexto } from "./components/EntradaTexto";
import { useState } from "react";



// Função de componente para a tela de login
export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const toast = useToast();

  async function login(){
    const resultado = await fazerLogin(email, senha);
    console.log(resultado);
    if(resultado && resultado.result.id){
      navigation.replace('Tabs');
    }else{
      toast.show({
        title: "Erro no Login!",
        description: "E-mail ou senha inválidos! Verifique!",
        backgroundColor: 'red.500'
      })
    }
  }

  return (
    <VStack flex={1} alignItems="center" p={5} justifyContent="center">
      {/* Exibe o logotipo */}
      <Image source={Logo} alt="Logo App Orientação" size={150} borderRadius={100}/>

      {/* Exibe um texto informativo */}
      <Text fontSize="2xl" fontWeight="bold" color="blue.600" textAlign="center" mt={5}>
        Realize o Login com suas credenciais!
      </Text>

      <Box>
        <EntradaTexto label="E-mail" placeholder="Insira seu e-mail." value={email} onChangeText={setEmail} />
        <EntradaTexto label="Senha" placeholder="Insira sua senha." value={senha} onChangeText={setSenha} secureTextEntry={true} />
      </Box>

      {/* Botão de login */}
      <Button w="100%" bg={TEMAS.colors.blue[600]} mt={8} borderRadius='lg'
      onPress={() => navigation.navigate('Rotas')}
      >Entrar
      </Button>

      {/* Link "Esqueceu sua senha?" */}
      <Link href='https://www.google.com.br' mt={6}>
        Esqueceu sua senha?
      </Link>

      {/* Texto "Ainda não cadastrado?" com link para a tela de cadastro */}
      <Box w="100%" flexDirection="row" justifyContent="center" mt={4}>
        <Text>Ainda não cadastrado? </Text>
        <TouchableOpacity onPress={() => navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{ name: '' }]
          })
        )}>
          <Text color={TEMAS.colors.blue[600]}>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>

    </VStack>
  );
}