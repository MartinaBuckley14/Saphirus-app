
import { StyleSheet, Text, View, Image } from 'react-native';
import Banner from './components/Banner.jsx';
import Galery from './components/Galery.jsx';


export default function App() {
  return (
    <View style={styles.container}>
      <Banner/>
      
      <Text style={styles.bienvenidaText}>Sumate a la comunidad Saphirus y revende con nosotros!</Text>
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
  },
  
  bienvenidaText: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center',
    color: 'black',
  },
  
});
