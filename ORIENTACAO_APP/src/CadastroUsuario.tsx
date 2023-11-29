// import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
// import { TouchableOpacity } from 'react-native';
// import Logo from './assets/dolly-fish.png';
// import { TEMAS } from './estilos/temas';
// import { Titulo } from './components/Titulo';
// import { usuarios } from './utils/CadastroAluno';
// import { EntradaTexto } from './components/EntradaTexto';
// import { useEffect, useState } from 'react';

// export default function CadastroUsuario() {

//   const [dados, setDados] = useState({} as any);

//   function atualizaDados(campo: string, valor: string){
//       setDados({...dados, [campo]:valor });
//   }

//   useEffect(()=>{

//   });

//   return (
//     <VStack flex={1} alignItems="center" p={5} justifyContent="center">
//       <Image source={Logo} alt="Logo do aplicativo Aquigest" />
//       <Titulo>{usuarios.titulo}</Titulo>
//       <Box>
//         {
//           usuarios.entradaTexto.map(entrada => {
//             return (
//               <EntradaTexto
//                 key={entrada.id}
//                 label={entrada.label}
//                 placeholder={entrada.placeholder}
//                 value={dados[entrada.name]} 
//                 secureTextEntry={entrada.secureTextEntry}
//                 onChangeText={(text => atualizaDados(entrada.name, text))}
//               />
//             )
//           })

//         }
//       </Box>
//       <Button w="100%" bg={TEMAS.colors.blue[800]} mb={10} borderRadius="lg" onPress={() => console.log(dados)}>
//         Cadastrar
//       </Button>
//     </VStack>
//   );
// }

