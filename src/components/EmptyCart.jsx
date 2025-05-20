//Componentes
import { StyleSheet, Text, View } from 'react-native'

const EmptyCart = () => {
  return (
    <View>
      <Text style={styles.noProducts}>Tu carrito está vacio 🥱</Text>
    </View>
  )
}

export default EmptyCart

const styles = StyleSheet.create({
    noProducts: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 15
  }
})