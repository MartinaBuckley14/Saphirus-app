import React from "react"
import { StyleSheet, View, Image, Text, Animated, TouchableOpacity, ScrollView } from "react-native"
import { useState } from "react";
import { colors } from "../global/colors";
import categories from '../data/categories.json'
import CategoryButton from "./CategoryButton";

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
        outputRange: [0, 80], // Tamaño del submenú (se expande de 0 a 150)
    })
        
    return (
        
        <View style={styles.navbar} >          
            <TouchableOpacity onPress={foldingMenu}>
                <Text style={styles.buttonMenu}>Menu</Text>
            </TouchableOpacity>


            <Animated.View 
                style={[styles.dropdown, {height: animatedHeight}]}
            >
                <ScrollView horizontal style={{flexDirection: 'row'}}>
                    {categories.map((category, index) => (<CategoryButton key={index} category={category.name}/>))}

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
                </ScrollView>
                
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
        
        
        padding: 6,
    },
    containernavbar: {
        alignContent: "center",
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
    buttonMenu: {
        color: colors.darkerBlue,
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
        
    },
    conteinerLineas: {
        flexDirection: "column",
        color: "white",
        
    },
    textMenu: {
        color: colors.darkerBlue,
        fontSize: 10
        
    }

})