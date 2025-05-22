import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { colors } from '../global/colors'

const InputForm = ({
    label, onChange, error = "", isSecure = false
}) => {
    const [input, setInput] = useState("")
    const onChangeText = (text) => {
      setInput(text)
      onChange(text)
    }

  return (
    <View style={styles.Conteiner}>
      <Text style={styles.title}>{label}</Text>
      <TextInput 
        style={[styles.input, error ? styles.inputError : {}]} 
        value={input} 
        onChangeText={onChangeText} 
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.textError}>{error}</Text> : null}
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
  Conteiner:{
    
    flexDirection: 'column',
    width: '100%',
    gap: 5 
  },
  title: {
    width: '100%',
    fontSize: 14,
  },
  input: {
    minWidth: '80%',
    borderWidth: 1,
    borderColor: colors.darkBlue,
  },
  inputError: {
    borderColor: 'red'
  },
  textError: {
    color: 'red',
    marginTop: 4,
    fontSize: 12
  }
})
