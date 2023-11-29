// Importação de bibliotecas e componentes necessários
import { VStack, Image, Box, Checkbox } from "native-base";
import { useState } from 'react';
import Logo from '../assets/logo.png';
import { Titulo } from "../components/Titulo";
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { secoes } from "../utils/CadastroAluno";
import { CommonActions, useNavigation } from "@react-navigation/native";

// Função de componente principal para o cadastro de aluno
export default function CadastroAluno() {
    const navigation = useNavigation(); // Define uma constante que recebe a função useNavigation para gerenciar a navegação
    const [numSecao, setNumSecao] = useState(0); // Define um estado para controlar a seção atual

    // Função para avançar para a próxima seção
    function avancarSecao() {
        if (numSecao < secoes.length - 1) {
            setNumSecao(numSecao + 1);
        }
    }
    
    // Função para voltar para a seção anterior
    function voltarSecao() {
        if (numSecao > 0) {
            setNumSecao(numSecao - 1);
        }
    }

    return (
        <VStack flex={1} alignItems="center" p={5}>
            {/*Exibe uma imagem */}
            <Image source={Logo} alt="Logo App Orientação" size={150} borderRadius={100} />
            {/* Exibe o título da seção atual */}
            <Titulo>
                {secoes[numSecao].titulo}
            </Titulo>
            {/* Renderiza as entradas de texto da seção atual */}
            <Box>
                {secoes[numSecao]?.entradaTexto?.map(entrada => {
                    return <EntradaTexto
                        label={entrada.label}
                        placeholder={entrada.placeholder}
                        key={entrada.id} />
                    })
                }</Box>
            {/* Renderiza os checkboxes da seção atual */}
            <Box>
                {secoes[numSecao]?.checkbox?.map(checkbox => {
                    return <Checkbox
                        key={checkbox.id}
                        value={checkbox.value}
                        mt={3}
                        p={2}
                        >
                            {checkbox.value}
                        </Checkbox>
                    })
                }</Box>

            {/* Botão para avançar para a próxima seção (se houver) */}
            {numSecao < secoes.length - 1 && <Botao onPress={() => avancarSecao()}>Avançar</Botao>}
            {/* Botão para voltar para a seção anterior (se houver) */}
            {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor='blue.300'>Voltar</Botao>}

            {/* Botão para finalizar o cadastro e voltar à tela de login */}
            {numSecao === 2 && <Botao bgColor='green.600'
                onPress={() => navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [{ name: 'Login' }]
                    })
                )}
            >Cadastrar-se</Botao>}
        </VStack>
    );
}
