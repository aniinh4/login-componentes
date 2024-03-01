import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
{
  /* Chamando a página de Login */
}
import Login from "./pages/login";

{
  /* Chamando Styles */
}
import styles from "./styles/stylescomponent";

export default function App() {
  return (
    <View style={styles.container}>
        <Login />
        <StatusBar style="auto" />
      </View>
  );
}