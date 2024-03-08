// Importa as bibliotecas necessárias do React e do React Native
import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

// Importa os estilos definidos externamente no arquivo stylescomponent
import styles from '../styles/stylescomponent';

// Define um componente funcional chamado Componentbtn
const Componentbtn = () => {
  
  // Função btn() é chamada quando o botão é pressionado, exibindo um alerta simples
  const btn = () => {
    alert("Logado com Sucesso");
  };

  return (
    // Componente View representa um contêiner para organizar outros componentes
    <View style={styles.body}>
      
      {/* Componente Button que, quando pressionado, chama a função btn() */}
      <TouchableOpacity onPress={btn} style={styles.button}>
        <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      
    </View>
  );
};

// Exporta o componente para ser utilizado em outros arquivos
export default Componentbtn;