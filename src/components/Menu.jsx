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
    //Valores de la altura del subMenu
    const animatedHeight = dropDownAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 150], // Tamaño del submenú (se expande de 0 a 150)
    })
        
    return (
        <View style={styles.navbar} >
            <TouchableOpacity onPress={foldingMenu}>
                <Text style={styles.button}>Menu</Text>
            </TouchableOpacity>


            <Animated.View 
                style={[styles.dropdown, {height: animatedHeight}]}
            >
                <View>
                    <TouchableOpacity style={styles.containernavbar}>
                        <View style={styles.conteinerLineas}>
                            <Image style={styles.button} source={require("../../assets/logoSaphirus.jpeg")}/>
                            <Text style={styles.textMenu}>Línea Saphisrus</Text>
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
                    </TouchableOpacity>
                </View>
                
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
        justifyContent: "space-around",
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
        overflow: 'hidden', // Evita que los elementos se desborden el menú cerrado
        width: '100%',
        flexDirection: "row"
    },
    conteinerLineas: {
        flexDirection: "column",
        color: "white",
        width: '100%',
    },
    textMenu: {
        color: "white",
        
    }

})