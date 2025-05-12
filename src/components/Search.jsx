import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors';

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
          <Pressable onPress={()=> onSearch(keyWord)} style={styles.goBack}><Text>Buscar</Text></Pressable>
          <Pressable onPress={goBack} style={styles.goBack}><Text>Volver a Inicio</Text></Pressable>
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