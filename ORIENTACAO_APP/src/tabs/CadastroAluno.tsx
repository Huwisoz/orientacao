// Importação de bibliotecas e componentes necessários
import { VStack, Image, Box, Checkbox } from "native-base";
import { useState } from 'react';
import Logo from '../assets/logo.png';
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { usuarios } from "../utils/CadastroAluno";
import { CommonActions, useNavigation } from "@react-navigation/native";

// Função de componente principal para o cadastro de aluno
export default function CadastroAluno() {
    const navigation = useNavigation(); // Define uma constante que recebe a função useNavigation para gerenciar a navegação
    const [dados, setDados] = useState({} as any);

    function atualizaDados(campo: string, valor: string){
        setDados({...dados, [campo]:valor });
    }


    return (
        <VStack flex={1} alignItems="center" p={5}>
            {/*Exibe uma imagem */}
            <Image source={Logo} alt="Logo App Orientação" size={100} borderRadius={100} />
            {/* Exibe o título da seção atual */}

            <Titulo>
                {usuarios.titulo}
        </Titulo>
        {/* Renderiza as entradas de texto da seção atual */}
        <Box> 
        {
        usuarios.entradaTexto.map(entrada => {
            return (
              <EntradaTexto
                key={entrada.id}
                label={entrada.label}
                placeholder={entrada.placeholder}
                value={dados[entrada.name]} 
                secureTextEntry={entrada.secureTextEntry}
                onChangeText={(text => atualizaDados(entrada.name, text))}
              />
            )
          })
        }
        </Box>
            {/* Botão para finalizar o cadastro e voltar à tela de login */}
            <Botao bgColor='green.600'
                onPress={() => navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{ name: 'Login' }]
                    })
                )}
            >Cadastrar-se</Botao>
            
            <Botao bgColor='blue.600'
                onPress={() => navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{ name: 'Login' }]
                    })
                )}
            >Voltar</Botao>

        </VStack>
        
    );
}
