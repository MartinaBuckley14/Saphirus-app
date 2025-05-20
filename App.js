//Componentes
import { StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
//Navegacion
import Navigator from './src/navigation/Navigator';
//Almacenamiento global
import store from './src/store';
//Estilos
import Toast from 'react-native-toast-message';
import { colors } from './src/global/colors';



export default function App() {
  
  return (
    <Provider store={store} >
      <Navigator/>
      <Toast/>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.cream,
    alignItems: 'center',
    
    paddingBottom: 30
  },
  bienvenidaText: {
    fontSize: 25,
    padding: 20,
  
    textAlign: 'center',
    color: 'black',
  },
  fotos: {
    resizeMode: "contain",
    height: 400,
    width: "100%",
    borderRadius: 20,
    
    
  },
  infotext: {
    display: "flex",
    fontSize: 20,
    padding: 10,
    
    textAlign: 'center',
    flexWrap: "wrap",
    color: 'black',
  }
  
});
