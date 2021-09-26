import React from "react";
import { StyleSheet, Text, Image, ImageBackground, Button, TextInput, View, TouchableOpacity } from "react-native";

const SignUp3Screen = () => {

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
                <TextInput placeholder="Most Recent Job"
                style={styles.txtInp}/>
                <TextInput placeholder="Employment Type"
                style={styles.txtInp}/>
                <TextInput placeholder="Most Recent Company"
                style={styles.txtInp}/>
                <TextInput placeholder="Industry"
                style={styles.txtInp}/>
                <TouchableOpacity style={{margin: 5,
                alignItems: 'center',}}>
                <Text style={styles.btnText}>      I'm a student      </Text>
                </TouchableOpacity>     
                <View style={styles.btnContainer}>
                <Button title="Continue" 
                color="#3aafaa"/>                     
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
        margin: 10,
        color: "#5a5a5a",
        borderColor: "#5a5a5a",
    },
    btnContainer:{
        width: "40%",
        textAlign: "center",
        margin: 15,
    },
    btnText:{
        padding: 5,
        borderWidth: 1,
        borderColor: "#3aafaa",
        color: "#3aafaa",
        
    },
});


export default SignUp3Screen;
