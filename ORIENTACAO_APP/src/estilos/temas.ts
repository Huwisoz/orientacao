import { extendTheme } from "native-base";
import { StyleSheet } from 'react-native';


export const TEMAS = extendTheme({
    colors:{
        gray:{
            300: '#8D8D99'
        },
        blue: {
            500:'#339CFF',
            800:'#0B3B60'
        },
        white: '#fff',
        black: '#000'
    },
    fontSizes: {
        xs: 12,
        sm:14,
        md:16,
        lg:20,
        xl:24
    }
})

export const estilo = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f2f2f2', // Altere a cor de fundo conforme necessário
      
    },
    scrollContainer: {
        justifyContent: 'center',
        width: '100%',
        padding: 12,
        overflow: 'scroll',
        backgroundColor: '#f2f2f2',
        paddingBottom: 40
    },
    card: {
      marginBottom: 16,
      padding: 16,
      backgroundColor: '#ffffff',
      borderRadius: 8,
      elevation: 3,
    },
    tituloCard: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#333333'
    },
    titulo: {fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#333333',
      paddingLeft: 12},
    texto: {
      fontSize: 16,
      marginBottom: 8,
      color: '#666666',
    },
    data: {
      fontSize: 14,
      color: '#999999',
    },
    botaoSair:{
      width: '100%',
      height: 75,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 12,
    }
  });
  