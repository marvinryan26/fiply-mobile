import React, { useState, useEffect, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './AuthStack';
import { AuthContext } from './AuthProvider';
import { AppStack } from './AppStack';
import * as SecureStore from 'expo-secure-store';


const Routes = () => {

    const { user, setUser } = useContext(AuthContext)

    useEffect(() => {
        SecureStore.getItemAsync('user')
            .then(response => {
                let userObject = JSON.parse(response)
                setUser(userObject)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />} 
        </NavigationContainer>
    )
}

export default Routes
