import { NativeBaseProvider, StatusBar} from 'native-base';
import { TEMAS } from './src/estilos/temas';
import { useEffect } from 'react';
import api from './src/servicos/api';

export default function App() {

  useEffect(()=>{
    async function getDados() {
      const resultados = await api.get('/api/usuario');
      console.log(resultados.data);
    }
    getDados()
  },[])

  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]}/>
      <App/>
    </NativeBaseProvider>
  );
}