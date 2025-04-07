import React from "react"
import { StyleSheet, View, Image, Text, Animated, TouchableOpacity } from "react-native"
import { useState } from "react";

const Menu = () => {

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
        
    return (
        <View style={styles.navbar} >
            <TouchableOpacity onPress={foldingMenu}>
                <Text style={styles.button}>Menu</Text>
            </TouchableOpacity>


            <Animated.View 
                style={[
                    styles.dropdown,
                    {
                        height: dropDownAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 150], // Tamaño del submenú (se expande de 0 a 150)
                        }),
                    },
                ]}
            >
                <TouchableOpacity style={styles.containernavbar}>
                    <View style={styles.conteinerLineas}>
                        <Image style={styles.button} source={require("../../assets/logoSaphirus.jpeg")}/>
                        <Text>Línea Saphisrus</Text>
                    </View>
                    <View>
                        <Image style={styles.button} source={require("../../assets/logoAmbar.jpeg")}/>
                        <Text>Línea Ambar</Text>
                    </View>
                    <View>
                        <Image style={styles.button} source={require("../../assets/logoMilano.jpeg")}/>
                        <Text>Línea Milano</Text>
                    </View>
                    
                    
                    <Image style={styles.button} source={require("../../assets/logoShiny.jpeg")}/>
                    <Image style={styles.button} source={require("../../assets/logoRedOn.png")}/>
                </TouchableOpacity>
                
                
            </Animated.View>
            
        </View>
        
       
    );
}

export default Menu

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "black",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 6,
    },
    containernavbar: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginRight: 20,
        
    },
    button: {
        color: "white",
        height: 40,
        width: 50,
        marginLeft: 8,

        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        borderRadius: 10,
    },
    dropdown: {
        overflow: 'hidden', // Importante para evitar que los elementos se desborden cuando el menú se cierra
        width: '100%',
    },
    conteinerLineas: {
        flexDirection: "column",
        color: "white"
    }

})