import { StyleSheet, Text, View, Pressable, Image, Alert } from 'react-native'
import { colors } from '../global/colors'
import { useState } from 'react'
import { usePostImageProfileMutation } from '../Services/Shop'
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import { setCameraImage } from '../features/User/userSlice'


const ImageSelector = ({navigation}) => {
    const [image, setImage] = useState(null)
    const [triggerPostImage, result] = usePostImageProfileMutation()
    const {localId} = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    
    const verifyCameraPermissions = async (type = 'camera') => {
        if(type === 'camera') {
            const {granted} = await ImagePicker.requestCameraPermissionsAsync()
            return granted
        }else {
            const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync()
            return granted
        }
        
    }    

    const pickImage = async () => {
        try {
            const permissionCamera = await verifyCameraPermissions('camera')
            if(!permissionCamera) return
             

            const result = await ImagePicker.launchCameraAsync({
                mediaType: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                base64: true,
                quality: 0.2
            })
            if(!result.canceled){
               const image = `data:image/jpg;base64,${result.assets[0].base64}` 
               setImage(image)
            }
            
        }catch(fail){}
    }

    const editImage = async () => {
        try {
            const permissionCamera = await verifyCameraPermissions('gallery')
            if(!permissionCamera) return
            
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaType: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1,1],
                base64: true,
                quality: 0.2
            })
            if(!result.canceled){
               const image = `data:image/jpg;base64,${result.assets[0].base64}` 
               setImage(image)
            }
            
        }catch(fail){
        
        }
    }

    const saveChanges = () => {
        try {
            dispatch(setCameraImage(image))
            
            triggerPostImage({image, localId})
            console.log('localId:', localId);
            navigation.goBack()
        }catch(fail){}
        
    }
    
    //Muestra un alert con opciones
    const openOptions = () => {
        Alert.alert('Seleccionar imagen', '¿Qué deseas hacer?', [
            { text: 'Tomar foto', onPress: pickImage },
            { text: 'Elegir de galería', onPress: editImage },
            { text: 'Cancelar', style: 'cancel' },
        ])
    }
  return (
    <View style={styles.conteiner}>
        {image ? 
        (<View style={styles.conteiner}>
            <Image source={{uri: image}} style={styles.userImage}/>
            <Pressable onPress={openOptions}><Text>Editar</Text></Pressable>
            <Pressable onPress={saveChanges}><Text>Guardar cambios</Text></Pressable>
        </View>) 
        : 
        (<View style={styles.conteiner}>
            <Text style={styles.textPicture}>No hay foto de perfil selecionada</Text>
            <Pressable style={styles.buttonAddImage} onPress={openOptions}>
                <Text style={styles.textPicture}>Tomar foto</Text>
            </Pressable>
        </View>)
        }
      
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    conteiner: {
        flex:1,
        width: '100%',
        gap: 15,
        padding: 10,
        marginTop: 10,
          
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