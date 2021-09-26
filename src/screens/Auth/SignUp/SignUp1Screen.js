import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, Image, ImageBackground, Button, TextInput, View } from "react-native";

const SignUp1Screen = ({navigation}) => {

    return(
        <ImageBackground source={require('../../../../assets/wavesignup1.png')}
        style={styles.imgBG}>
        <View style={styles.container}>
            <Image source={require('../../../../assets/Fiply-Logo.png')} 
            style={styles.logo}/>
            <Text style={{ flexDirection: "row", 
            color: "#3aaFaa",
            fontSize: 30,
            marginLeft: 10,}}>FIPLY</Text>
            </View>
            <View style={{flex:3, alignItems: "center"}}>
                <TextInput placeholder="Your Email"
                style={styles.txtInp}/>
                <TextInput placeholder="Password"
                style={styles.txtInp}/>  
                <Text style={styles.txtUser}>By clicking Agree & Join, you agree to the Fiply User Agreement, Privacy Policy, and Cookie Policy.</Text>
                <View style={styles.btnContainer}>
                <Button title="Agree & Join" 
                color="#3aafaa"
                onPress={()=> navigation.navigate('SignUp2')}/>
                </View>      
            </View>
               
            

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imgBG:{
        width: "100%",
        height: "100%",
        flex: 1,
    },
    logo:{
        height: 75,
        width: 75,
        alignSelf: "center",
    },
    container:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 150,
    },
    txtInp:{
        alignSelf: "center", 
        width: "80%",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 15,
        color: "#5a5a5a",
        borderColor: "#5a5a5a",
    },
    txtUser:{
        margin: 10,
        textAlign: "center",
        fontSize: 16,
        color: "#5a5a5a",
    },
    btnContainer:{
        width: "40%",
        textAlign: "center",
        margin: 20,

    },
});


export default SignUp1Screen;
