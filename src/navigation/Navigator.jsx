//Componentes
import { StyleSheet} from 'react-native'
import BottomTabNavigator from './BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from '../features/User/userSlice';

const Navigator = () => {
  const dispatch = useDispatch()
  const{user} = useSelector(state => state.auth.value)

  console.log("Usuario en redux:", user);

  useEffect(()=> {
    (async()=>{
      try {
        const response = await getSession()
        if(response){
          const user = response
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            token: user.token
          }))
        } 
      }catch(fail) {
        
      }
    })()
  },[user])
  
  return (
    <NavigationContainer>
      {user ? <BottomTabNavigator/> : <AuthStackNavigator/>}
    </NavigationContainer>
   
  )
}

export default Navigator

const styles = StyleSheet.create({})