
import { StyleSheet, Text, View, Image } from 'react-native';
import Banner from './components/Banner.jsx';
import Galery from './components/Galery.jsx';


export default function App() {
  return (
    <View style={styles.container}>
      <Banner/>
      
      <Text style={styles.bienvenidaText}>Sumate a la comunidad Saphirus y revende con nosotros!</Text>
      <View style={{flexDirection: "row", gap: 20, width: "100%", }}>
        <Image style={styles.fotos} source={require("./assets/localView.jpeg")}/>
        <Text style={styles.infotext}>Podes encontrarnos en: "Direccion del local" <br/> Horarios de atencion: de 10 a 18hs</Text>
      </View>
      
      <Galery/>
      
    </View> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: 'white',
    alignItems: 'center',
    gap: 30
  },
  bienvenidaText: {
    fontSize: 25,
    padding: 20,
  
    textAlign: 'center',
    color: 'black',
  },
  fotos: {
    objectFit: "cover",
    height:380,
    width: "50%",
    borderRadius: 3,
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  infotext: {
    fontSize: 20,
    padding: 10,
    
    textAlign: 'center',
    color: 'black',
  }
  
});
