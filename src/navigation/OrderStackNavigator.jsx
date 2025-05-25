import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Orders from '../screens/Orders'
import DetailOrder from '../screens/DetailOrder'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator 
        initialRouteName='Orders'
        screenOptions={{
            headerShown: false,

        }}>
        <Stack.Screen name='Orders' component={Orders}/>
        <Stack.Screen name='DetailOrder' component={DetailOrder}/>
    </Stack.Navigator>
  )
}
export default OrderStackNavigator

const styles = StyleSheet.create({})