//Componentes
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart'
//Funciones/Hooks
import { useDispatch, useSelector } from 'react-redux'
import {usePostOrderMutation} from '../Services/Shop'
import { clearCart } from '../features/Cart/cartSlice'
//Estilos
import { colors } from '../global/colors'
import Toast from 'react-native-toast-message'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
  const cart = useSelector(state => state.cart.cartProducts ?? [])
  const {localId} = useSelector(state => state.auth.value)
  const total = cart.reduce((suma, item) => suma + item.price*item.quantity, 0)
  const [triggerPostOrder, result] = usePostOrderMutation()
  const dispatch = useDispatch()
  const navigation = useNavigation()


  const confirmOrder = () => {
    try {
      if(cart.length > 0){
        triggerPostOrder({items: cart, user: localId, total})

        //Limpiar carrito
        dispatch(clearCart())

        //Navegar hacia la pantalla de opciones
        navigation.navigate('HomeScreeenNavigator', {screen: 'CompleteOrder'})
      }else {
        Toast.show({
          type: 'error',
          text1: 'Su carrito está vacío',
          position: 'top',
          visibilityTime: 3000
        })
      }
    }catch (fail){

    }
    
  }
  
  return (
    <View style={styles.cartView}>
      <FlatList
        data={cart}
        keyExtractor={product=> product.id}
        renderItem={({item})=> <CartItem productCart={item}/>}
        ListEmptyComponent={<EmptyCart/>}
      />
      <View style={styles.viewCheckOut}>
        <Pressable style={styles.checkOut} onPress={confirmOrder}>
          <Text >Finalizar compra</Text>
        </Pressable>
        <Text style={styles.checkOutText}>Total: ${total}</Text>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  cartView: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.cream
  },
  viewCheckOut: {
    width: '100%',
    gap: 4,
    margin: 8,
    padding: 3,
    alignItems: 'flex-end'
  },
  checkOut: {
    fontSize: 13,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: colors.backgroundMenuButton,
    backgroundColor: colors.backgroundButton,
    padding: 5,
    margin: 8,

    width: '40%'
  },
  checkOutText: {
    textAlign: 'right',
    width: '50%',
    marginRight: 20

  }
})