//Componentes
import { StyleSheet} from 'react-native'
import Home from '../screens/Home';
import ItemListCategory from '../screens/ItemListCategory';
import ItemDetail from '../screens/ItemDetail';
//Funciones
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = ({navigation}) => {
  return (    
    <Stack.Navigator initialRouteName='Home' screenOptions={()=>({
      headerShown: false,
    })}>            
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='ListCategories' component={ItemListCategory}/>
      <Stack.Screen name='ItemDetail' component={ItemDetail}/>
    </Stack.Navigator>
    
   
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})