//Componentes
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart'
//Funciones/Hooks
import { useSelector } from 'react-redux'
import {usePostOrderMutation} from '../Services/Shop'
//Estilos
import { colors } from '../global/colors'

const Cart = () => {
  const cart = useSelector(state => state.cart.cartProducts ?? [])
  const {localId} = useSelector(state => state.auth.value)
  const total = cart.reduce((suma, item) => suma + item.price*item.quantity, 0)
  const [triggerPostOrder, result] = usePostOrderMutation()


  const confirmOrder = () => {
    triggerPostOrder({items: cart, user: localId, total})

    //Limpiar carrito
    
  }
  
  return (
    <View style={styles.cartView}>
      <FlatList
        data={cart}
        keyExtractor={product=> product.id}
        renderItem={({item})=> <CartItem productCart={item}/>}
        ListEmptyComponent={<EmptyCart/>}
      />
      <View>
        <Pressable onPress={confirmOrder}>
          <Text>Checkout</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
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
})