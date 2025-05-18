import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import EmptyCart from '../components/EmptyCart'

const Cart = ({route, navigation}) => {
  const cart = []
  const total = 0
  return (
    <View style={styles.cartView}>
      <FlatList
        data={cart}
        keyExtractor={product=> product.id}
        renderItem={({item})=> <CartItem productCart={item}/>}
        ListEmptyComponent={<EmptyCart/>}
      />
      <View>
        <Pressable>
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