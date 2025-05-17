import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import allProducts from '../data/products.json'
import { colors } from '../global/colors';

const ItemDetail = ({route, navigation}) => {
    const [product, setProduct] = useState("");

    const {productId: idSelected} = route.params
    
    
    useEffect(() => {
        const productSelected = allProducts.find( (product) => product.id === idSelected);
        setProduct(productSelected)

    }, [idSelected]);

  return (
    <>
      <Pressable>         
        <Text>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Pressable onPress={() => navigation.goBack()}><Text>Back</Text></Pressable>
        <Pressable><Text>Add to cart</Text></Pressable>

      </Pressable>
    </>
  );
}

export default ItemDetail

const styles = StyleSheet.create({
  ItemBack: {
    flex: 1,
    backgroundColor: colors.cream
  },
  button: {
    backgroundColor: colors.cream
  }
})