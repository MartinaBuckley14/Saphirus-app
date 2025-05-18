import { FlatList, StyleSheet, Text, View } from 'react-native'

import OrderItem from '../components/OrderItem'
import EmptyOrders from '../components/EmptyOrders';


const Orders = () => {

  const ListOrders = [];

  return (
    <View>
      <FlatList 
        data={ListOrders}
        keyExtractor={order => order.id}
        renderItem={({item}) => <OrderItem order={item}/> }
        ListEmptyComponent={<EmptyOrders/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})