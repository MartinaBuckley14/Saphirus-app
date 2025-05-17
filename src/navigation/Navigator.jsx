import { StyleSheet, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';




const Navigator = ({navigation}) => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
   
  )
}

export default Navigator

const styles = StyleSheet.create({})