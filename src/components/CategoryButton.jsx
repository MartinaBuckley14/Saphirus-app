import { StyleSheet, TouchableOpacity, View, Text, Image, Button } from 'react-native'
import React from 'react'

const CategoryButton = ({category}) => {
  return (
    <View style={styles.conteinerLineas}>
      <Button style= {{color:"black"}} title={category}/> 
    </View>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
  conteinerLineas: {
    flexDirection: "column",
    color: "black",
  },
  button: {
    color: "white",
    height: 40,
    width: 50,
    marginLeft: 8,

    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    borderRadius: 10,
  },
})