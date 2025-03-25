import React from "react"
import { StyleSheet, View, Image, Text} from "react-native"

const Banner = () => {
    return (
        <View style={styles.banner}>
            <View >
                <Image style={styles.fotobanner} source={require("../assets/saphirus banner.jpg")} />
                <Text style={styles.title} >Mercedes City</Text>
            </View>
        </View>
        
       
    )
}

export default Banner

const styles = StyleSheet.create({
    banner: {
        width: "100%",
        backgroundColor: "#0D7FBD"
    },
    fotobanner: {
        height:250, 
        width: "100%"
    },
    title: {
        fontSize: 25,
        color: 'white',

        marginTop: -40,
        justifyContent: 'start',
        textAlign: 'right',
        marginRight: 20,
    },
})