import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import Banner from './src/components/Banner';
import Galery from './src/components/Galery';
import Menu from './src/components/Menu';
import { colors } from './src/global/colors';
import Home from './src/screens/Home';
import { useState } from 'react';
import ItemListCategory from './src/screens/ItemListCategory';



export default function App() {
  const [categorySelected, setCategorySelected]= useState("")

  return (
    <View style={styles.container}>
      <Banner/>
      <Menu pickedCategory={setCategorySelected}/>
      {!categorySelected ? <Home/> : <ItemListCategory category={categorySelected} setCategorySelected={setCategorySelected}/> }
    </View> 
    
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
