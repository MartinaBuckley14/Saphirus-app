//Componentes
import { StyleSheet} from 'react-native'
import BottomTabNavigator from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Navigator = ({navigation}) => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
   
  )
}

export default Navigator

const styles = StyleSheet.create({})