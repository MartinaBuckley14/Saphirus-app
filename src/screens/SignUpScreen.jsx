import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../Services/AuthApi'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useDispatch } from 'react-redux'
import { signUpSchema } from '../validations/authSchema'
import { setUser } from '../features/User/userSlice'
import Toast from 'react-native-toast-message'

const SignUpScreen = ({navigation}) => {

  const [email, setEmail] = useState("")
  const [errormail, setErrorMail] = useState("")
  const [password, setPassword] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("")

  const dispatch = useDispatch()
  const [triggerSignup, result] = useSignUpMutation()
  
  useEffect(()=>{
    if(result.isSuccess){
      dispatch(
        setUser({
          user: result.data.email,
          token: result.data.idToken,
          localId: result.data.localId
        })
      )
      //Limpiar campos del formulario
      setEmail("")
      setPassword("")
      setConfirmPassword("")

      //Aviso de registro exitoso
      Toast.show({
        type: 'success',
        text1: 'Usuario creado con éxito!',
        position: 'bottom',
        visibilityTime: 4000
      })
  
      //Redirigir al usuario para que inicie sesion una vez registrado
      setTimeout(()=> {
        navigation.navigate('Login')
      },1500)
    }
    
  },[result])

  const onSubmit = () => {
    try {
      setErrorMail("")
      setErrorPassword("")
      setErrorConfirmPassword("")

      signUpSchema.validateSync({email, password, confirmPassword})

      triggerSignup({
        email,
        password,
        returnSecureToken: true
      })

    }catch(fail){
      switch (fail.path) {
        case "email": 
          setErrorMail(fail.message)
          break
        case "password":
          setErrorPassword(fail.message)
          break
        case "confirmPassword":
          setErrorConfirmPassword(fail.message)
          break
      }
    }

    
  }
    
  return (
    <View style={styles.mainConteiner}>
      <View style={styles.conteinerForm}>
        <Text style={styles.title}>Registrate!</Text>
        <InputForm 
          label={"Email"}
          value={email}  
          onChange={setEmail} 
          error={errormail}
        />
        <InputForm 
          label={"Password"}
          value={password} 
          placeholder={'Ingrese una contraseña'} 
          onChange={setPassword} 
          error={errorPassword} 
          isSecure={true}
        />
        <InputForm 
          label={"Confirm password"} 
          value={confirmPassword} 
          onChange={setConfirmPassword} 
          error={errorConfirmPassword} 
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