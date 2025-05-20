//Componentes
import { ScrollView, StyleSheet } from 'react-native'
import CategoryButton from './CategoryButton'
//Funciones/Hooks
import {useGetCategoryQuery} from '../Services/Shop'

const Categories = ({selectCategory}) => {

  const {data, error, isLoading} = useGetCategoryQuery()

  //Formateo de los datos proveninetes de FireBase
  const categories = data ? Object.values(data) : []
  
  return (
    <ScrollView horizontal>
      {categories.map((category) => (
        <CategoryButton 
          key={category} 
          category={category} 
          chosenCategory={selectCategory}/>))}
    </ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})