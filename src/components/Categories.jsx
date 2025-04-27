import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import CategoryButton from './CategoryButton'

const Categories = ({selectCategory}) => {
    
  return (
    <ScrollView horizontal>
      {categories.map((category, id) => (<CategoryButton key={id} category={category.name} image={category.image} chosenCategory={selectCategory}/>))}
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})