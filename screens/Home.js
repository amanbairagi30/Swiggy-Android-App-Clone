import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import {View,Text} from 'react-native';


const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown : false,
    })
  },[])
  return (
    <Text className="text-red-600">Home comp</Text>
  )
}

export default Home
