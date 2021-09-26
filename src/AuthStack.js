import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Auth/LoginScreen'
import SignUp1Screen from './screens/Auth/SignUp/SignUp1Screen';
import SignUp2Screen from './screens/Auth/SignUp/SignUp2Screen';
import SignUp3Screen from './screens/Auth/SignUp/SignUp3Screen';
import SignUp4Screen from './screens/Auth/SignUp/SignUp4Screen';
import SignUp5Screen from './screens/Auth/SignUp/SignUp5Screen';
import SignUp6Screen from './screens/Auth/SignUp/SignUp6Screen';

const Stack = createStackNavigator();



export const AuthStack = () =>{
    return(
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="SignUp1" component={SignUp1Screen}/>
            <Stack.Screen name="SignUp2" component={SignUp2Screen}/>
            <Stack.Screen name="SignUp3" component={SignUp3Screen}/>
            <Stack.Screen name="SignUp4" component={SignUp4Screen}/>
            <Stack.Screen name="SignUp5" component={SignUp5Screen}/>
            <Stack.Screen name="SignUp6" component={SignUp6Screen}/>
          </Stack.Navigator>
      )
}


