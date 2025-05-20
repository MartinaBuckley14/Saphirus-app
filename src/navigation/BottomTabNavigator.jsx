//Funciones/Hooks
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//Componentes
import Orders from '../screens/Orders';
import Cart from '../screens/Cart';
import HomeStackNavigator from './HomeStackNavigator';
import Banner from '../components/Banner';
//Estilos
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../global/colors';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({route})=>({
        header: () => {
            return <Banner/>
        },
        tabBarShowLabel: false,
    })}>
        <Tab.Screen name='HomeScreeenNavigator' component={HomeStackNavigator} options={()=>({
            tabBarIcon: ({focused})=>(
                <FontAwesome name="home" size={24} color={focused ? colors.darkBlue : colors.creamDark} />
            )
        })}/>
        <Tab.Screen name='Cart' component={Cart} options={()=>({
            tabBarIcon: ({focused})=>(
                <MaterialCommunityIcons name="cart-variant" size={24} color={focused ? colors.darkBlue : colors.creamDark} />
            )
        })}/>
        <Tab.Screen name='Orders' component={Orders} options={()=>({
            tabBarIcon: ({focused})=>(
                <MaterialIcons name="assignment" size={24} color={focused ? colors.darkBlue : colors.creamDark} />
            )
        })}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator
