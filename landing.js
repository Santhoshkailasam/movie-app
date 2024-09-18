import React from "react";
import { Button, ImageBackground, Text, TextInput, View } from "react-native";
import CountryPicker from "react-native-country-picker-modal"

export default function Landing(props){
    function Splash(props){
        setTimeout( ()=>{props.navigation.navigate('login')},2000)


    }
    Splash(props)
    return(
        <>
        <View style={{flex:1, backgroundColor:'#08090A'}}>
            <ImageBackground style={{width:'80%', height:400, marginTop:100, marginLeft:70}} source={require('./assets/home-online-image-04 1.png')}>

            </ImageBackground>
            
            <Text style={{color:'#fff', marginTop:40,marginLeft:'35%', fontSize:30}}>
                Get Started 
                <CountryPicker visible withCallingCode></CountryPicker>
            </Text>
            <Text style={{width:'30%', height:40,backgroundColor:'#D7096C' ,borderRadius:7, color:'#fff', marginLeft:'50%',marginTop:'40%', fontSize:20, textAlign:'center',textAlignVertical:"center"}}>
                Start
            </Text>
        </View>
        <Button title="press" onPress={()=>{props.navigation.navigate('main')}}></Button>
        
       
        </>
    )
}