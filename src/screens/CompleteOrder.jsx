import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import {clearUser} from '../features/User/userSlice'
import { colors } from '../global/colors'

const CompleteOrder = ({route, navigation}) => {
    const dispatch = useDispatch()


    const handleSeguirComprando = () => {
        navigation.navigate('Home')
    }

    const handleLogOut = () => {
        dispatch(clearUser())
        navigation.navigate('HomeScreeenNavigator', {screen: 'Login'})
    }
  return (
    <View style={styles.conteiner}>
      <Text style={styles.successText}>Su pedido ha sido creado {'\n'} con éxito! ✅</Text>
      <Pressable style={styles.optionButton} onPress={handleSeguirComprando}><Text>Seguir comprando</Text></Pressable>
      <Pressable style={styles.optionButton} onPress={handleLogOut}><Text>Cerrar sesion</Text></Pressable> 
    </View>
  )
}

export default CompleteOrder

const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '10%',
        backgroundColor: colors.cream
    },
    successText: {
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',

        marginBottom: 20

    },
    optionsText: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    optionButton: {
        fontSize: 13,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 3,
        borderColor: colors.backgroundMenuButton,
        backgroundColor: colors.backgroundButton,
        padding: 5,
        margin: 6,
    }
})