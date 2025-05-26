import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../Services/Shop'
import { clearUser } from '../features/User/userSlice'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { clearCart } from '../features/Cart/cartSlice'

const MyProfile = ({navigation}) => {
    const {imageCamera, localId} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId)
    const dispatch = useDispatch()

    const defaultImage = "../../assets/Iconos/defaultImage.jpg"
    
    const addPicture = () => {
      navigation.navigate('Image Selector')
    }

    const logOut = () => {
      dispatch(clearUser())
      dispatch(clearCart())
      AsyncStorage.multiRemove('authToken','cart')
      
    }

    
  return (
    <View style={styles.conteiner}>
      <View style={styles.conteinerProfileCard}>
          {imageFromBase || imageCamera ? 
          (<Image source={{uri: imageFromBase?.image|| imageCamera}} style={styles.userImage} resizeMode='cover'/>) 
          : 
          (<Image source={require(defaultImage)} style={styles.userImage} resizeMode='cover'/>)}
        
        <Pressable style={styles.buttonAddImage} onPress={addPicture}>
          {imageFromBase || imageCamera ? 
          (<Text style={styles.textButton}>Editar foto de perfil</Text>) 
          : 
          (<Text style={styles.textButton}>Agregar foto de perfil</Text>) 
          }  
        </Pressable>
        <Pressable style={styles.buttonLogOut} onPress={logOut}><Text style={styles.textButtonLogOut}>Cerrar Sesion</Text></Pressable>
      </View>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    conteiner: {
      flex: 1,
      gap: 15,

      backgroundColor: colors.cream,
      
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    conteinerProfileCard: {
      borderRadius: 10,
      marginTop: 30,
      padding: 20,
      width: '90%',
      alignItems: 'center',

      backgroundColor: colors.creamDark,
    },
    userImage: {
      width: 150,
      height: 150,
      borderRadius: 80,
      borderWidth: 2,
      marginBottom: 20,
      borderColor: colors.bannerBlue 
    },
    buttonAddImage: {
      backgroundColor: colors.backgroundButton,
      borderWidth: 1.5,
      borderColor: colors.bannerBlue,
      borderRadius: 3,
      width: '80%',
      paddingVertical: 12,
      marginVertical: 5,
      alignItems: 'center',

      padding: 5,

    },
    buttonLogOut: {
      backgroundColor: colors.backgroundMenuButton,
      borderWidth: 1.5,
      borderColor: colors.bannerBlue,
      borderRadius: 3,
      width: '80%',
      paddingVertical: 12,
      marginVertical: 5,
      alignItems: 'center',

      padding: 5,
    },
    textButton: {
      fontSize: 12
    },
    textButtonLogOut: {
      fontSize: 12,
      color: 'white',

    }
})