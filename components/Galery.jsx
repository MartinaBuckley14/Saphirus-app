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
            </ScrollView>
        </>
            
            
       
       
    )
}

export default Galery

const styles = StyleSheet.create({
    galerypics: {
        objectFit: "cover",
        height: 200,
        width: 190,
        borderRadius: 3,
        
    },
    conteinerpics: {
        flex: 1, 
        gap: 20,
    }
})