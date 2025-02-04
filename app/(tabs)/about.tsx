import { View, Text, Linking } from 'react-native'
import React from 'react'
import UserAvatar from '@/components/UserAvatar'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabAbout() {
  return (

    <View>
      <View className= 'flex flex-row items-center ml-4 mt-4'>
     <UserAvatar name='@Marcos' urlAvatar='https://pbs.twimg.com/profile_images/1486125702630019078/RxmIKmhH_400x400.jpg'/> 
      </View>
     <Text className='text-4xl font-bold ml-4 mt-4 top'>
      Sobre mi
      </Text>
      <Text className='text-xs text-jusify mx-4'>
          Soy un desarrollador de software con experiencia en desarrollo web y móvil.
          Ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
      </Text>
  
     <Text className='text-3xl font-bold ml-4 mt-4'>
      Contacto
     </Text>

      <View className='flex flex-row items-center ml-4 mt-4'>
          <Ionicons name='logo-github' size={35} color='black'/>
          <Text className='text-md text-blue-500 font-bold underline'
          onPress={(e) => { 
              e.preventDefault()
              Linking.openURL('https://github.com/marcosdogexd')}}>
              @marcosdogexd</Text>
          </View>

          <View className='flex flex-row items-center ml-4 mt-4'>
           <Ionicons name='logo-facebook' size={35} color='blue'/>
           <Text className='text-md text-blue-500 font-bold'>
              Marcos Ontaneda</Text>
          </View>

          <View className='flex flex-row items-center ml-4 mt-4'>
           <Ionicons name='logo-twitter' size={35} color='lightblue'/>
           <Text className='text-md text-blue-500 font-bold'>
              @marcosdoge</Text>
          
          </View>
    </View>
  )
}