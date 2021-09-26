import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import TestScreen from './src/screens/TestScreen';
import TestScreen from '../src/screens/TestScreen'



const Stack = createStackNavigator();



export const AppStack = () =>{
    return(
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Test" component={TestScreen}/>
          </Stack.Navigator>
      )
}


