import React from "react"
import { StyleSheet, View, Image, Text,Button } from "react-native"

const Menu = () => {
    return (
        <View style={styles.navbar}>
            <View >
                <Text style={styles.button}>Menu</Text>
            </View>
            <View style={styles.containernavbar}>
                <Image style={styles.button} source={require("../assets/logoSaphirus.jpeg")}/>
                <Image style={styles.button} source={require("../assets/logoAmbar.jpeg")}/>
                <Image style={styles.button} source={require("../assets/logoMilano.jpeg")}/>
                <Image style={styles.button} source={require("../assets/logoShiny.jpeg")}/>
                <Image style={styles.button} source={require("../assets/logoRedOn.png")}/>
            </View>
            
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

})