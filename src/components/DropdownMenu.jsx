import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native'
import React, { useState } from 'react'

const DropdownMenu = () => {
    const [drop, setDrop] = useState(false);
    const [dropDownAnim] = useState(new Animated.Value(0));

    const foldingMenu = () => {
        if(drop) {
            Animated.timing(dropDownAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false,
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
    <View>
        <TouchableOpacity onPress={foldingMenu}>
            <Text>Menu</Text>
        </TouchableOpacity>

        <Animated.View
        style={[
          styles.dropdown,
          {
            height: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 150], // Tamaño del submenú (se expande de 0 a 150)
            }),
          },
        ]}
        >
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Opción 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Opción 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text style={styles.menuText}>Opción 3</Text>
            </TouchableOpacity>
      </Animated.View>
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    menuItem: {
        padding: 15,
        backgroundColor: '#007bff',
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuText: {
        color: '#fff',
        fontSize: 16,
    },
    dropdown: {
        overflow: 'hidden', // Importante para evitar que los elementos se desborden cuando el menú se cierra
        width: '100%',
    },
})

export default DropdownMenu