import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import Ionicons from '@expo/vector-icons/Ionicons';

const CartItem = ({productCart}) => {
  return (
    <Pressable style={styles.ItemConteiner}>
      <Text style={styles.item}>{productCart.title}</Text>
      <Text style={styles.item}>$ {productCart.price}</Text>

      <Pressable style={styles.item}><Ionicons name="trash-outline" size={23} color={colors.darkerBlue}/></Pressable>
    </Pressable>
  )
}

export default CartItem

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