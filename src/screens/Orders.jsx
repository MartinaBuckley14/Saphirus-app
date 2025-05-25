//Componentes
import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderItem from '../components/OrderItem'
import EmptyOrders from '../components/EmptyOrders';
import { useGetOrderQuery } from '../Services/Shop';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

const Orders = () => {
  const{localId} = useSelector(state => state.auth.value)
  const {data: ListOrders = [], isSuccess, isFetching, refetch} = useGetOrderQuery(localId)

  const [userOrders, setUserOrders] = useState()
  console.log(ListOrders)
  console.log(userOrders)

  useEffect(() => {
    if(isSuccess){
      const responseTransformed = Object.values(ListOrders || [])
      const userOrdersFilter = responseTransformed.filter(order => order.user === localId)
      setUserOrders(userOrdersFilter)

    }
  },[ListOrders, isSuccess, localId])

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch])
  )

  return (
    <View>
      <FlatList 
        data={userOrders}
        keyExtractor={(item, index) => item.firebaseId || index.toString()}
        renderItem={({item}) => <OrderItem order={item}/> }
        ListEmptyComponent={<EmptyOrders/>}
        onRefresh={refetch}
        refreshing={isFetching}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})