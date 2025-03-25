import React from "react"
import { StyleSheet, View, Image, Text, ScrollView} from "react-native"


const Galery = () => {
    return (
        <>
            <ScrollView horizontal>
                <View style={styles.conteinerpics}>
                    <Image style={styles.galerypics} source={require("../assets/prodShiny.jpeg")}/>
                </View>
                <View>
                    <Image style={styles.galerypics} source={require("../assets/difuColor.jpeg")}/>
                </View>
                <View>
                    <Image style={styles.galerypics} source={require("../assets/Autoaromas.jpeg")}/>
                </View>
                <View>
                    <Image style={styles.galerypics} source={require("../assets/colorAero.jpeg")}/>
                </View>
                <View>
                    <Image style={styles.galerypics} source={require("../assets/route66.jpeg")}/>
                </View>
            </ScrollView>
        </>
            
            
       
       
    )
}

export default Galery

const styles = StyleSheet.create({
    galerypics: {
        objectFit: "cover",
        height: 300,
        width: 250,
        borderRadius: 3,
        
    },
    conteinerpics: {
        flex: 1, 
        gap: 20,
    }
})