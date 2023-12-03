import { Button , IButtonProps} from "native-base";
import { ReactNode } from "react";
import { TEMAS } from "../estilos/temas";

//Define uma interface para as props do componente Button personalizado
interface ButtonProps extends IButtonProps {
    children: ReactNode; // Aceita qualquer conteúdo React (texto, outros componentes, etc.)
    autoSize?: boolean; // Uma prop opcional para determinar se o botão deve dimensionar automaticamente
    color?: string; // Uma prop opcional para especificar a cor de fundo do botão
}

// Define o componente Botao personalizado
export function Botao({ children, autoSize = false, color, ...rest }: ButtonProps) {
    return (
        <Button
            w={autoSize ? 'auto' : '100%'} // Define a largura do botão como 'auto' ou '100%' com base na prop autoSize
            bg={color || TEMAS.colors.blue[600]} // Define a cor de fundo com base na prop color ou usa a cor padrão do tema
            mt={5} // Define a margem superior
            borderRadius="lg" // Define o raio de borda como 'lg' (large)
            _text={{ color: 'white' }} // Define a cor do texto como branco
            {...rest} // Espalha quaisquer outras props passadas para o componente Button
        >
            {children} {/* Renderiza o conteúdo do botão (filhos) */}
        </Button>
    );
}