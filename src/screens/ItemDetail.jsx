//Componentes React
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
//Funciones/Hooks React
import { useDispatch } from 'react-redux';
//Reducer/Hooks de Redux Toolkit
import { addToCart } from '../features/Cart/cartSlice';
import { useGetProductByIdQuery } from '../Services/Shop';
//Estilos
import { colors } from '../global/colors';
import Toast from 'react-native-toast-message';




const ItemDetail = ({route, navigation}) => {

  const dispatch = useDispatch()

  const {productId: idSelected} = route.params

  const {data: product , error, isLoading} = useGetProductByIdQuery(idSelected)
  
    
  //Funcion manejadora de agregar productos al carrito usando react-redux
  const handleAddToCart = () => {
    dispatch(addToCart(product))

    Toast.show({
      type: 'success',
      text1: 'Producto agregado!',
      position: 'top',
      visibilityTime: 1500
    })
  }

  //Manejo de error al cargar el producto
  if (isLoading) return <Text>Cargando producto...</Text>
  if (error) return <Text>Error al cargar el producto</Text>
  if (!product) return <Text>No se encontró el producto</Text>

  return (
    <>
      <Pressable style={styles.ItemBack}>
        <Image style={styles.photo} source={{uri: product.photo}}/>        
        <Text style={styles.textTittle}>{product.title}</Text>
        <Text style={styles.textDescription}>{product.description}</Text>
        <Text style={styles.textPrice}>${product.price}</Text>
        <View style={styles.conteinerButton}>
          <Pressable onPress={() => navigation.goBack()} style={styles.button}><Text style={{textAlign: 'center'}}>Back</Text></Pressable>
          <Pressable onPress={handleAddToCart} style={styles.button}><Text style={{textAlign: 'center'}}>Add to cart</Text></Pressable>
        </View>
        

      </Pressable>
    </>
  );
}

export default ItemDetail

const styles = StyleSheet.create({
  ItemBack: {
    flex: 1,
    width: '100%',
    padding: 10,
    backgroundColor: colors.creamDark,
    gap: 4,
    
  },
  conteinerButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    gap: 2
  },
  button: {
    width: '30%',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundButton,
    margin: 2,
    padding: 2,

    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.bannerBlue
  },
  textTittle: {
    fontSize: 18,    
  },
  textDescription: {
    fontSize: 14,
    padding: 10    
  },
  textPrice: {
    fontSize: 15,
    marginLeft: 10
  },
  photo: {
    width: 300, 
    height: 300, 
    borderRadius: 8, 
    resizeMode: 'contain',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.bannerBlue
  }
  
})