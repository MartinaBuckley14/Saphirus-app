import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color="#0000ff"/>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})