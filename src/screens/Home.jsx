import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import { colors } from '../global/colors'
import Inicio from '../components/Inicio'
import Banner from '../components/Banner';
import Menu from '../components/Menu';

const Home = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      
      <Menu pickedCategory={navigation}/>     
      <Inicio/>
    </View> 
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.cream,
    alignItems: 'center',
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