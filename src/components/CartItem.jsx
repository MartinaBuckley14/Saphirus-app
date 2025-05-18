import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../features/Cart/cartSlice';


const CartItem = ({productCart}) => {

  const dispatch = useDispatch();
  const subtotal = productCart.price * productCart.quantity;

  const handleDeleteProduct = ()=>{
    dispatch(deleteProduct(productCart.id))
  }

  return (
    <Pressable style={styles.ItemConteiner}>
      <Text style={styles.item} numberOfLines={1} ellipsizeMode='tail'>{productCart.title}</Text>
      <Text style={styles.item}>$ {subtotal}</Text>
      <Text style={styles.item}>{productCart.quantity}</Text>
      <Pressable style={styles.item} onPress={handleDeleteProduct}><Ionicons name="trash-outline" size={23} color={colors.darkerBlue}/></Pressable>
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

    justifyContent: 'space-around',
    margin: 5,

    backgroundColor: colors.backgroundButton,
    borderWidth: 4,
    borderColor: colors.bannerBlue,
    borderRadius: 4,
    shadowColor: 'black',
    
    
  },
  item: {
    color: colors.darkerBlue,
    alignSelf: 'center',
    padding: 6,
    maxWidth: 150,
  },
  

})