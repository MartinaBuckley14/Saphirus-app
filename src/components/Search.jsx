//Componentes
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
//Funciones/Hooks
import { useState } from 'react'
//Estilos
import { colors } from '../global/colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Search = ({error="", onSearch = ()=>{}, goBack =()=>{}}) => {
    const [keyWord, setKeyword]= useState("");

  return (
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
       <TextInput
            placeholder='Buscar...'
            value={keyWord}
            onChangeText={setKeyword}
        />
        <View style={styles.ConteinerButtons}>
          <Pressable onPress={()=> onSearch(keyWord)} style={styles.goBack}><FontAwesome5 name="search" size={24} color="black" /></Pressable>
          <Pressable onPress={goBack} style={styles.goBack}><Text>Volver <FontAwesome name="home" size={24} color="black" /></Text></Pressable>
        </View>
        
        
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  goBack: {
    borderWidth: 2,
    borderRadius: 4,
    borderColor: colors.cream,

    
    padding: 3,
    textAlign: 'center'
  },
  ConteinerButtons: {
    width: '50%',

    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})