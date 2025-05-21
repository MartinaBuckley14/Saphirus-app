import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../Services/AuthApi'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useDispatch } from 'react-redux'
import { signUpSchema } from '../validations/authSchema'
import { setUser } from '../features/User/userSlice'

const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const dispatch = useDispatch()
  const [triggerSignup, result] = useSignUpMutation()
  
  useEffect(()=>{
    if(result.isSuccess){
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken
      })
    )
  
    }
    
  },[result])

  const onSubmit = () => {
    
    triggerSignup({
      email,
      password,
      returnSecureToken: true
    })
  }
    
  return (
    <View style={styles.mainConteiner}>
      <View style={styles.conteinerForm}>
        <Text style={styles.title}>Registrate!</Text>
        <InputForm 
          label={"Email"} 
          onChange={setEmail} 
          error={''}
        />
        <InputForm 
          label={"Password"}
          placeholder={'Ingrese una contraseña'} 
          onChange={setPassword} 
          error={''} 
          isSecure={true}
        />
        <InputForm 
          label={"Confirm password"} 
          onChange={setConfirmPassword} 
          error={''} 
          isSecure={true}
        />
        <SubmitButton
          onPress={onSubmit} 
          title='Crear cuenta'
        />
        <Text style={styles.text}>Ya tenes usuario? Inicia sesion acá 👇🏻</Text>
        <Pressable onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.link}>Iniciar sesion</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  mainConteiner: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '8%'
  },
  conteinerForm: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  text: {
    fontSize: 12,
    margin: 4,
    textAlign: 'center'
  },
  link: {
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  }
  
})