import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ProductItem = ({product}) => {
  // Validamos si el producto tiene una foto para evitar errores
  const imageUrl = product?.photo?.url || 'https://via.placeholder.com/200';

  return (

    <View style={styles.productContainer}>
      <Image source={{ uri: imageUrl }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, // Para Android
    width: "80%",
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  productBrand: {
    fontSize: 14,
    color: '#888',
  },
})