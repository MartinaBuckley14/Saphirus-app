import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors';
import AntDesign from '@expo/vector-icons/AntDesign';

const DetailOrder = ({route, navigation}) => {
    const {order} = route.params

    

  return (
   <View style={styles.container}>
    <Pressable onPress={()=>navigation.goBack()} style={styles.goBackButton}><AntDesign name="back" size={20} color="black" /></Pressable>
      <Text style={styles.header}>Detalles de la Orden</Text>
      <View style={styles.containerInfo}>
            <Text style={styles.info}>Fecha: {new Date(order.createdAt).toLocaleString()}</Text>
            <Text style={styles.info}>Total: ${order.total}</Text>
            <Text style={styles.subheader}>Productos:</Text>
      </View>
      

      <FlatList
        data={order.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productDetails}>Cantidad: {item.quantity}</Text>
                <Text style={styles.productDetails}>Precio unitario: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );

}

export default DetailOrder

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '10%',
        backgroundColor: colors.cream
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        textDecorationLine: 'underline',

        marginBottom: 20
    },
    containerInfo: {
        width: '100%',
       
    },
    info: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',

        width: '100%',
        marginBottom: 10
    },
    subheader: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'right',

        width: '50%',
    },
    productItem: {
        fontSize: 14,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 3,
        borderColor: colors.backgroundMenuButton,
        backgroundColor: colors.backgroundButton,
        padding: 5,
        margin: 6,
        
    },
    productTitle: {
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'left',
    },
    productDetails: {
       fontSize: 12,
        fontStyle: 'italic',
        textAlign: 'left', 
    },
    goBackButton:{
        
        fontSize: 14,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 3,
        borderColor: colors.bannerBlue,
        
        padding: 5,
        margin: 6,
        marginTop: -20,

        alignSelf: 'flex-end'
    } 
    

})