import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useSignInMutation} from '../Services/AuthApi'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/User/userSlice'

const LogInScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerSignIn, result] = useSignInMutation()

  //Estados para manejar formulario
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(()=> {
    if(result.isSuccess){
      dispatch(
        setUser({
          user: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId
        })
      )
    }
  },[result])

  //Funcion para manejar formulario
  const onSubmit = () => {

   if(!email || !password) {
    alert('Completar ambos campos')
    return
   } 
    triggerSignIn({email, password,})
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