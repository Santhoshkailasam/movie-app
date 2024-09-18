import React from "react";
import { Text, View } from "react-native";
import User from "../assets/User_";
 const ite ="#fff"
export default function Round( prop ){
    return(
        <View style={{display:'flex',flexDirection:'column', alignItems:"center",}}>
             <View style={{width:50,height:50,backgroundColor:"#525252" ,borderRadius:100, display:'flex',alignItems:'center', justifyContent:'center', borderColor:'#FF0079',borderWidth:2,}}>
                <User/>
            </View>
            <Text style={{color:ite ,}}>
                jack
            </Text>
        </View>
       
    )
}