import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../Services/Shop'

const MyProfile = ({navigation}) => {
    const {imageCamera, localId} = useSelector(state => state.auth.value)
    const {data: imageFromBase} = useGetProfileImageQuery(localId)

    const defaultImage = "../../assets/Iconos/defaultImage.jpg"
    const addPicture = () => {
        navigation.navigate('Image Selector')
    }

  return (
    <View style={styles.conteiner}>
        {imageFromBase || imageCamera ? 
        (<Image source={{uri: imageFromBase?.image|| imageCamera}} style={styles.userImage} resizeMode='cover'/>) 
        : 
        (<Image source={require(defaultImage)} style={styles.userImage} resizeMode='cover'/>)}
      
      <Pressable style={styles.buttonAddImage} onPress={addPicture}>
        {imageFromBase || imageCamera ? 
        (<Text style={styles.textPicture}>Editar foto de perfil</Text>) 
        : 
        (<Text style={styles.textPicture}>Agregar foto de perfil</Text>) 
        }  
      </Pressable>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    conteiner: {
      flex: 1,
      gap: 15,
      padding: 10,
      marginTop: 20,
      
      alignItems: 'center',
      justifyContent: 'flex-start'  
    },
    userImage: {
        width: '40%',
        height: '25%',
        borderRadius: 90,
        borderWidth: 2,
        borderColor: colors.bannerBlue 
    },
    buttonAddImage: {
        backgroundColor: colors.backgroundButton,
        borderWidth: 1.5,
        borderColor: colors.bannerBlue,
        borderRadius: 3,

        padding: 5,

    },
    textPicture: {
        fontSize: 12
    }
})