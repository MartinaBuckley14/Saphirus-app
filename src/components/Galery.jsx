import React from "react"
import { StyleSheet, View, Image, ScrollView} from "react-native"


const Galery = () => {
    return (
        <>
            <ScrollView horizontal contentContainerStyle={{padding: 10}}>
                <View style={styles.conteinerpics}>
                    <Image style={styles.galerypics} source={require("../../assets/ImagenesInicio/prodShiny.jpeg")}/>
                    <Image style={styles.galerypics} source={require("../../assets/ImagenesInicio/difuColor.jpeg")}/>
                    <Image style={styles.galerypics} source={require("../../assets/ImagenesInicio/Autoaromas.jpeg")}/>
                    <Image style={styles.galerypics} source={require("../../assets/ImagenesInicio/colorAero.jpeg")}/>
                    <Image style={styles.galerypics} source={require("../../assets/ImagenesInicio/route66.jpeg")}/>
                </View>
                
            </ScrollView>
        </>
            
            
       
       
    );
}

export default Galery

const styles = StyleSheet.create({
    galerypics: {
        objectFit: "cover",
        height: 250,
        width: 250,
        borderRadius: 3,
        
        
    },
    conteinerpics: {
        flex: 1, 
        gap: 20,
        flexDirection: "row",
        paddingBottom: 50
    }
})