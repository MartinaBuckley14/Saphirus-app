//Componentes
import { StyleSheet, Text, Pressable } from 'react-native'
//Estilos
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native';

const OrderItem = ({order}) => {
  const navigation = useNavigation()

  const handlePressOrder = () => {
    navigation.navigate('DetailOrder', {order})
  }

  const productCount = order.items.length;
  
  return (
    <Pressable style={styles.ItemConteiner} onPress={handlePressOrder}>
        <Text style={styles.item}>{new Date(order.createdAt).toLocaleString()}</Text>
        <Text style={styles.item}>Productos: {productCount}</Text>
        <Text style={styles.item}>${order.total}</Text>
    </Pressable>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    ItemConteiner: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        height: 50,
    
        gap: 10,
        margin: 5,
        justifyContent: 'space-between',
    
        backgroundColor: colors.backgroundButton,
        borderWidth: 4,
        borderColor: colors.bannerBlue,
        borderRadius: 4,
        shadowColor: 'black',
        
        
      },
      item: {
        color: colors.darkerBlue,
        alignSelf: 'center',
        padding: 6
      },
})