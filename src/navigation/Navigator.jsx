import { StyleSheet, Text, View } from 'react-native'

import Home from '../screens/Home';
import ItemListCategory from '../screens/ItemListCategory';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemDetail from '../screens/ItemDetail';

const Stack = createNativeStackNavigator();

const Navigator = ({navigation}) => {
  return (
    <NavigationContainer>
        
        <Stack.Navigator initialRouteName='Home'>            
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='ListCategories' component={ItemListCategory}/>
            <Stack.Screen name='ItemDetail' component={ItemDetail}/>
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default Navigator

const styles = StyleSheet.create({})