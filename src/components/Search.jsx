import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors';

const Search = ({error="", onSearch = ()=>{}, goBack =()=>{}}) => {
    const [keyWord, setKeyword]= useState("");

  return (
    <View>
       <TextInput
            placeholder='Buscar...'
            value={keyWord}
            onChangeText={setKeyword}
        />
        <Pressable onPress={()=> onSearch(keyWord)} style={styles.goBack}><Text>Buscar</Text></Pressable>
        <Pressable onPress={goBack} style={styles.goBack}><Text>Inicio</Text></Pressable>
        
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    goBack: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: colors.oceanBlue,

        width: 50,
        padding: 3,
        
    }
})