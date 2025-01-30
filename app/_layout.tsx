import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
// Import your global CSS file
import "../global.css";

const RootLayout = () => {
  return (
    <View className={"p-4 bg-black  h-screen"}>
      <Text className={"font-extrabold text-5xl text-white"}>
        Header
      </Text>

      <Slot />

      <Text>
        Footer
      </Text>



    </View>
  )
}

export default RootLayout