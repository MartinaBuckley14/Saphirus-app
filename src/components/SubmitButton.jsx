import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SubmitButton = ({onPress, title}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  button: {
    fontSize: 13,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: colors.backgroundMenuButton,
    backgroundColor: colors.backgroundButton,
    padding: 5,
    margin: 6,
  }
})