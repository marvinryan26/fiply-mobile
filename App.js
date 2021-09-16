import React from 'react';
import {Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from './src/screens/LogIn'
import SignUp1 from './src/screens/SignUp/SignUp1';
import SignUp2 from './src/screens/SignUp/SignUp2';
import SignUp3 from './src/screens/SignUp/SignUp3';
import SignUp4 from './src/screens/SignUp/SignUp4';
import SignUp5 from './src/screens/SignUp/SignUp5';
import SignUp6 from './src/screens/SignUp/SignUp6';




import { NavigationContainer } from '@react-navigation/native';

export default function App(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="SignUp1" component={SignUp1}/>
        <Stack.Screen name="SignUp2" component={SignUp2}/>
        <Stack.Screen name="SignUp3" component={SignUp3}/>
        <Stack.Screen name="SignUp4" component={SignUp4}/>
        <Stack.Screen name="SignUp5" component={SignUp5}/>
        <Stack.Screen name="SignUp6" component={SignUp6}/>



      </Stack.Navigator>
    </NavigationContainer>
  )
}



