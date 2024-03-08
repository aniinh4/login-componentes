import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    inputname: {
      color: 'black',
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 25,
      width: 300,
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

    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      },

      form: {
        flex: 1,
        top: "20%",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      },

      login: {
        color:"black",
      left: 15,
      top: 5,
        justifyContent: "center",
        alignItems:"enter",
    
       
      },
  
      button: {
        backgroundColor:"white",
        top: 50,
        width: 70,
        height: 30,
        borderRadius: 20,
       
      },

  });
  

  export default styles;  
  