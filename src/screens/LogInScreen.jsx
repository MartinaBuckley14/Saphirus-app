import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useSignInMutation} from '../Services/AuthApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/User/userSlice'
import { signInSchema, signUpSchema } from '../validations/authSchema'
import Toast from 'react-native-toast-message'

const LogInScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerSignIn, result] = useSignInMutation()

  //Estados para manejar formulario
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(()=> {
    if(result.isError) {
      const errorCode = result.error?.data?.error?.message

      let toastMessage = ''

      switch (errorCode) {
        case 'EMAIL_NOT_FOUND':
        case 'INVALID_PASSWORD':
        case 'INVALID_LOGIN_CREDENTIALS':
          toastMessage = 'Email o contraseña incorrectos'
          break
        case 'INVALID_EMAIL':
          toastMessage = 'Formato de email inválido';
          break;
        case 'USER_DISABLED':
          toastMessage = 'Esta cuenta ha sido deshabilitada';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          toastMessage = 'Demasiados intentos, intenta más tarde';
          break;
        default:
          toastMessage = 'Ocurrió un error al iniciar sesión'
      }

      Toast.show({
        type: 'error',
        text1: toastMessage,
        position: 'top',
        visibilityTime: 4000
      })
    }

    //para ejecutar en caso de que no se detecte error
    if(result.isSuccess){
      dispatch(
        setUser({
          user: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId,
        })
      )
    }
    
  },[result])

  //Funcion para manejar formulario
  const onSubmit = async () => {
    if(!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Completar ambos campos',
        position: 'top',
        visibilityTime: 4000
      })
      return
    }

    try{
      await signInSchema.validate({email,password})
      triggerSignIn({email, password})
    }catch(fail){
      //manejo de errores
      switch (fail.path) {
        case "email": 
          setErrorMail(fail.message)
          break
        case "password":
          setErrorPassword(fail.message)
          break
      }
    }
  }
      

  return (
    <View style={styles.mainConteiner}>
      <View style={styles.conteinerForm}>
        <Text style={styles.title}>Iniciar sesion</Text>
        <InputForm label={"Email"} onChange={setEmail} error={''}/>
        <InputForm label={"Password"} onChange={setPassword} error={''} isSecure={true}/>
        <SubmitButton onPress={onSubmit} title='Ingresar'/>
        <Text style={styles.text}>Es tu primera vez? Registrate acá 👇🏻</Text>
        <Pressable onPress={()=> navigation.navigate('SignUp')}>
            <Text style={styles.link}>Crea tu usuario</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default LogInScreen

const styles = StyleSheet.create({
  mainConteiner: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '10%'
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