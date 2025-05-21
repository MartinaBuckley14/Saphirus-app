import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, Text, View } from 'react-native'
import LogInScreen from '../screens/LogInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import Banner from '../components/Banner'

const Stack = createNativeStackNavigator()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={({route})=>({
        header: () => {
            return <Banner/>
        },
    })}>
        <Stack.Screen name='Login' component={LogInScreen}/>
        <Stack.Screen name='SignUp' component={SignUpScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})
