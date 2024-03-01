import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {

  btn = () => {
    alert("Logado com Sucesso");
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/fundo.webp')} resizeMode="cover" style={styles.foto}>
        <Text style={styles.titulo}>Login</Text>

        

        <TextInput style={styles.inputname} placeholder='E-mail' />

        <TextInput style={styles.inputname} placeholder='Senha' secureTextEntry={true} />
        <Button
          onPress={btn}
          style={styles.botao}
          title='Logar'
        />
        <Image
          style={styles.logo}
          source={require('./assets/capacete.jpg')}
        />
        
      

        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputname: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 25,
    width: 500,
    height: 50,
    backgroundColor: 'white',
    borderBottomLeftRadius: 25,
    borderStartEndRadius: 25,
    borderEndEndRadius:25,

  },
  foto: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
  },
  
  
  titulo: {
    fontWeight: 'bold',
    fontSize: 50,
   
    color: 'white',
    
  },
  logo: {
    width: 250,
    height: 50,
    bottom: 300,
  },

 
});


