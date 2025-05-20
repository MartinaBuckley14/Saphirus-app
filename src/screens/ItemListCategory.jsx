//Componentes
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
//Funciones/Hooks
import { useEffect, useState } from 'react'
import { useGetProductsQuery } from '../Services/Shop'
//Estilos
import { colors } from '../global/colors'



const ItemListCategory = ({route, navigation,}) => {

  

  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("")

  const{category: category } = route.params

  const {data: products, isLoading} = useGetProductsQuery()

  useEffect(()=>{
    if(!products) return; 

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

  },[keyWord, category, products])

  //Manejo de error al cargar el producto
    if (isLoading) return <Text>Cargando productos...</Text>
    if (error) return <Text>Error al cargar los productos</Text>
    if (!products) return <Text>No se encontraron productos</Text>

  return (
    <View style={styles.ListCat}>
      <Text style={styles.tituloLineaProd}>Línea {category}</Text>
      <Search error={error} onSearch={setKeyword} goBack={()=>navigation.goBack()} style={styles.buscador}/>
      <FlatList
        data={productsFiltered}
        renderItem={({item})=>(<ProductItem product={item} detail={navigation}/>)}
        keyExtractor={(product)=> product.id}
        style={styles.cats}
        contentContainerStyle={{alignItems: 'center'}}
      />
      
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  tituloLineaProd: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: 'underline',
    marginTop: 4
  },
  buscador: {
    alignSelf: "flex-end",
  },
  ListCat: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.cream,
  },
  cats: {
    width: '100%'
  }
})