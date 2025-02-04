import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
// Import your global CSS file
import "../global.css";

const RootLayout = () => {

  //Caja - marco

  return (
    <View className='h-screen'>
       <StatusBar barStyle={'dark-content'} />

       <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
       </Stack>
    </View>
  )
}

export default RootLayout