//Componentes
import { StyleSheet} from 'react-native'
import BottomTabNavigator from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Navigator = () => {
  const{user} = useSelector(state => state.auth.value)
  console.log("Usuario en redux:", user);
  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
   
  )
}

export default Navigator

const styles = StyleSheet.create({})