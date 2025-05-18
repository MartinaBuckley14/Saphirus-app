import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import products from "../data/products.json"
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { colors } from '../global/colors'


const ItemListCategory = ({
  //category="", 
  //setCategorySelected=()=>{},
    route, 
    navigation,
  }) => {
  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("")

  const{category: category } = route.params

  useEffect(()=>{
    const regex = /\d/;
    const hasDigits = (regex.test(keyWord))

    if(hasDigits){
      setError("No se permiten numeros")
      return
    }
    //Filtro segun categoria
    const ProductsPickedCategory = products.filter(product => product.brand === category )
    
    //Filtro por palabra clave en buscador
    const searchedProducts = ProductsPickedCategory.filter(product => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
    
    //confirmacion de productos disponibles
    if (searchedProducts.length === 0) {
      setError('No se encontraron productos relacionados')
    }else {
      setError('')
    }

    //Guardo nuevo array de productos filtrados en varible
    setProductsFiltered(searchedProducts)

  },[keyWord, category])
  return (
    <View style={styles.ListCat}>
      

      <Text>Línea {category}</Text>
      <Search error={error} onSearch={setKeyword} goBack={()=>navigation.goBack()} style={styles.buscador}/>
      <FlatList 
        data={productsFiltered}
        renderItem={({item})=>(<ProductItem product={item} detail={navigation}/>)}
        keyExtractor={(product)=> product.id}
      />
      
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  buscador: {
    alignSelf: "flex-end"
  },
  ListCat: {
    flex: 1,
    backgroundColor: colors.cream
  }
})