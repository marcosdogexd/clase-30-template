import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
// Import your global CSS file
import "../global.css";

const RootLayout = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "gray" }}>
      <Text style={{ color: "white" }}>
        Header
      </Text>
      <Slot />
      <Text style={{ color: "white" }}>
        Footer
      </Text>
    </View>
  )
}

export default RootLayout