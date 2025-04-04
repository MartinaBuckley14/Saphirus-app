
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import Banner from './components/Banner.jsx';
import Galery from './components/Galery.jsx';
import Menu from './components/Menu.jsx';


export default function App() {
  return (
    <View style={styles.container}>
      <Banner/>
      <Menu/>
      <ScrollView>
        
      
        <Text style={styles.bienvenidaText}>Sumate a la comunidad Saphirus y revende con nosotros!</Text>

        

        <View style={{gap: 20, width: "100%", }}>
          <Image style={styles.fotos} source={require("./assets/localView.jpeg")}/>
          <View>
            <Text style={styles.infotext}>Podes encontrarnos en: "Direccion del local".</Text>
            <Text style={styles.infotext}>Horarios de atencion: de 10 a 18hs</Text>
          </View>
          
        </View>
      
        <Galery/>
        


      </ScrollView>
      
      
    </View> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: 'white',
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
