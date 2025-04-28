import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors';

const Search = ({error, onSearch, goBack}) => {
    const [keyWord, setKeyword]= useState("");

  return (
    <View>
        <Pressable onPress={goBack} style={styles.goBack}><Text>Inicio</Text></Pressable>

        <TextInput
            placeholder='Buscar...'
            value={keyWord}
            onChangeText={(text)=> onSearch(text)}
        />
        
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