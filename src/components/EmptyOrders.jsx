//Componentes
import { StyleSheet, Text, View } from 'react-native'

const EmptyOrders = () => {
  return (
    <View>
      <Text style={styles.noOrders}>Aun no has realizado compras 👀</Text>
    </View>
  )
}

export default EmptyOrders

const styles = StyleSheet.create({
    noOrders: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
        marginTop: 15
    }
})