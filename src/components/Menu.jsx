//Componentes
import { StyleSheet, View, Text, Animated, TouchableOpacity } from "react-native"
import Categories from "./Categories";
//Funciones/Hooks
import { useState } from "react";
//Estilos
import { colors } from "../global/colors";


const Menu = ({pickedCategory}) => {

    //Configuracion del menu desplegable
    const [drop, setDrop] = useState(false);
    const [dropDownAnim] = useState(new Animated.Value(0));
    
    const foldingMenu = () => {
        if(drop) {
            Animated.timing(dropDownAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }else {
            Animated.timing(dropDownAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    
        setDrop(!drop);
    }
    //Valores de la altura del subMenu
    const animatedHeight = dropDownAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50], // Tamaño del submenú (se expande de 0 a 150)
    })
    
    return (
        
        <View style={styles.navbar} >          
            <TouchableOpacity onPress={foldingMenu}>
                <Text style={styles.buttonMenu}>Menu</Text>
            </TouchableOpacity>

            <Animated.View 
                style={[styles.dropdown, {height: animatedHeight}]}
            >
                <Categories selectCategory={pickedCategory}/>
    
            </Animated.View>
            
        </View>
        
       
    );
}

export default Menu

const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        backgroundColor: "transparent",
        gap: 3,
        
        alignSelf: 'flex-start',
        
        
        padding: 4,
    },
    button: {
        height: 40,
        
        marginLeft: 8,

        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.darkerBlue
        
    },
    buttonMenu: {
        backgroundColor: colors.backgroundMenuButton,
        color: colors.cream,
        height: 40,
        width:"20%",
        
        padding:5,


        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        borderRadius: 3,
        borderWidth: 2,
        
        borderColor: colors.darkerBlue
        
    },
    dropdown: {
        backgroundColor: 'transparent',
        overflow: 'hidden', // Evita que los elementos se desborden el menú cerrado
        width: '100%',
        
        
    },
    textMenu: {
        color: colors.darkerBlue,
        fontSize: 10
        
    }

})

//VISUAL ESPERADA DEL MENU DE CATEGORIAS
{/*<TouchableOpacity style={styles.containernavbar}>
                        <View style={styles.conteinerLineas}>
                            <Image style={styles.button} source={require("../../assets/logoSaphirus.jpeg")}/>
                            <Text style={styles.textMenu}>Línea Saphirus</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containernavbar}>
                        <View style={styles.conteinerLineas}>
                            <Image style={styles.button} source={require("../../assets/logoAmbar.jpeg")}/>
                            <Text style={styles.textMenu}>Línea Ambar</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containernavbar}>
                        <View style={styles.conteinerLineas}>
                            <Image style={styles.button} source={require("../../assets/logoMilano.jpeg")}/>
                            <Text style={styles.textMenu}>Línea Milano</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containernavbar}>
                        <View style={styles.conteinerLineas}>
                            <Image style={styles.button} source={require("../../assets/logoShiny.jpeg")}/>
                            <Text style={styles.textMenu}>Línea Shiny</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.containernavbar}>
                        <View style={styles.conteinerLineas}>
                            <Image style={styles.button} source={require("../../assets/logoRedOn.png")}/>
                            <Text style={styles.textMenu}>Línea Red On</Text>
                        </View>    
                    </TouchableOpacity>*/}