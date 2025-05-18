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
      <Pressable style={styles.ItemBack}>
        <Image style={styles.photo} source={{uri: product.photo}}/>        
        <Text style={styles.textTittle}>{product.title}</Text>
        <Text style={styles.textDescription}>{product.description}</Text>
        <Text style={styles.textPrice}>${product.price}</Text>
        <View style={styles.conteinerButton}>
          <Pressable onPress={() => navigation.goBack()} style={styles.button}><Text style={{textAlign: 'center'}}>Back</Text></Pressable>
          <Pressable style={styles.button}><Text style={{textAlign: 'center'}}>Add to cart</Text></Pressable>
        </View>
        

      </Pressable>
    </>
  );
}

export default ItemDetail

const styles = StyleSheet.create({
  ItemBack: {
    flex: 1,
    width: '100%',
    padding: 10,
    backgroundColor: colors.creamDark,
    gap: 4,
    
  },
  conteinerButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    gap: 2
  },
  button: {
    width: '30%',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundButton,
    margin: 2,
    padding: 2,

    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.bannerBlue
  },
  textTittle: {
    fontSize: 18,    
  },
  textDescription: {
    fontSize: 14,
    padding: 10    
  },
  textPrice: {
    fontSize: 15,
    marginLeft: 10
  },
  photo: {
    width: 300, 
    height: 300, 
    borderRadius: 8, 
    resizeMode: 'contain',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.bannerBlue
  }
  
})