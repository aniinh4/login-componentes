import { ImageBackground } from "react-native-web";
import styles from "../styles/stylescomponent";

const LoginImageBackground =({children}) => {
    return(
        <ImageBackground
        source={require('../assets/fundo.webp')}
        style={styles.fundo}
        >

            {children}
        </ImageBackground>

    );
}

export default LoginImageBackground 