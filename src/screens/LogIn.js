import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Image, Button, Alert, ImageBackground } from 'react-native';
import SignUp1 from './SignUp/SignUp1';
import { createStackNavigator } from '@react-navigation/stack';


export default function App({navigation}){

  return(
    <ImageBackground source={require('../../assets/wave-haikei.png')} style={styles.container}>


        <Image
        source={require('../../assets/mobilelogin.png')}
        style={{width: 200, height: 200, marginTop: 300 ,}} 
        />
        <TextInput 
        style={styles.input}
        placeholder="Username"
        />
        <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        />
        <View style={styles.btnContainer}>
          <Button title="Sign In" color="#3aafaa" onPress={() => navigation.navigate('SignUp1')}/>  
        </View>

        <Text style={{color: "#e5e5e5", 
          textAlign: 'center', 
          margin: 10, 
          fontWeight: 'bold'}}>- - - Sign in with - - -</Text>
          <Image 
          style={{width: 40, height: 40, alignSelf: 'center',}}
          source={require('../../assets/googlelogo.png')}/>
          <Image 
          style={styles.blobst}
          source={require('../../assets/blob.png')}/>
          <Text style={{position: 'absolute', bottom: 20,
          fontSize: 17,}}>Don't have an account yet? Sign Up</Text> 
    </ImageBackground>   
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: "80%",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderColor: "#5a5a5a",
    borderWidth: 1,
    borderRadius: 5,
    color: "#5a5a5a",
  },
  btnContainer:{
    textAlign: 'center',
    width: "40%",
    margin: 10,
  },
  blobst:{
    height: 200,
    width: 200,
    right: 175,
    bottom: 125,
  },

});
