import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CategoryButton = ({category="", chosenCategory = ()=>{}}) => (
  <TouchableOpacity onPress={()=> chosenCategory.navigate('ListCategories', {category})} style={styles.button}>
    <Text>{category}</Text>
  </TouchableOpacity>
)

export default CategoryButton

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  /*image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },*/
})