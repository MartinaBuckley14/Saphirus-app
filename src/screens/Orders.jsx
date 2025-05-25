//Componentes
import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderItem from '../components/OrderItem'
import EmptyOrders from '../components/EmptyOrders';
import { useGetOrderQuery } from '../Services/Shop';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Orders = () => {
  const{localId} = useSelector(state => state.auth.value)
  const {data: ListOrders, isSuccess} = useGetOrderQuery()

  const [userOrders, setUserOrders] = useState()

  useEffect(() => {
    if(isSuccess){
      const responseTransformed = Object.values(ListOrders)
      const userOrdersFilter = responseTransformed.filter(order => order.user === localId)
      setUserOrders(userOrdersFilter)

    }
  },[ListOrders, isSuccess, localId])

  return (
    <View>
      <FlatList 
        data={userOrders}
        renderItem={({item}) => <OrderItem order={item}/> }
        ListEmptyComponent={<EmptyOrders/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})