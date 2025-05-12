import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import allProducts from '../data/products.json'

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
            <Button title='Volver' onPress={() => navigation.goBack()}/>
            <Button title="Add to cart" />

        </Pressable>
    </>
    
      
   
  );
}

export default ItemDetail

const styles = StyleSheet.create({})