import { View, Text, Image } from 'react-native'
import React from 'react'


interface UserAvatarProps { 
    name: string
    urlAvatar: string
    }

export default function UserAvatar(
    {name, urlAvatar} : UserAvatarProps
){
  return (
    <View className='flex-1'>
      <View className='flex justify-center items-center mt-8'>
        <Image 
        source={{uri: urlAvatar}}
        className='w-20 h-20 rounded-full'
        />
        <Text className='text-2xl'>{name}</Text>
       </View>
    </View>
  )
}