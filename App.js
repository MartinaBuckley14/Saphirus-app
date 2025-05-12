import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';

import { colors } from './src/global/colors';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';



export default function App() {
  const [categorySelected, setCategorySelected]= useState("")

  return (
    <Navigator>
      
    </Navigator>
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
