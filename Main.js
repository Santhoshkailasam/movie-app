import React from "react";
import { Text, TextInput, View,StyleSheet,Image,ScrollView } from "react-native";
import Round from "./component/Round";
import Bat from "./assets/Svgcomponent.js"
import Svg,{Path} from 'react-native-svg'
import Search from "./assets/primary.js";
import User from "./assets/User_.js";
import Qr from "./assets/qr-code.js";
import Copy from "./assets/copy-4.js";

export default function Main(props){
    return(
        /* this is for */

<View style={{backgroundColor:'#191919',flex:1,}}>
    <View id="Container1" style={{display:'flex',flexDirection:'row',marginLeft:20,alignItems:'center', marginTop:'10%',}}>
        <View onTouchStart={()=>props.navigation.navigate('learn')} style={{width:50,height:50,backgroundColor:'#F11E83', borderRadius:100, display:'flex',alignItems:'center', justifyContent:'center'}}>
            <User />
        </View>
            
        <TextInput placeholder="Search" placeholderTextColor={"#fff"} style={{width:'70%',height:40,backgroundColor:'#3E3E3E', paddingLeft:15,borderColor:'#F11E83', borderWidth:3,  textTransform:'uppercase',color:'#fff',  } }>
           
        </TextInput>

    </View>
    <ScrollView>
        <View id="container2" style={{justifyContent:'center', display:'flex',flexDirection:'row',marginTop:'20%'}}>
            <View style={{width:200,height:30,borderColor:'#F11E83', borderWidth:2, borderRadius:20, alignItems:'center', justifyContent:'center',display:'flex',flexDirection:'row'}}>
                <Text style={{color:'#717171' ,marginLeft:8, textAlignVertical:'center'}}>UPI : example@oksbi</Text>
                <Copy/>
            </View>
            <View style={{width:40,height:40,borderColor:"#F11E83",borderRadius:5, borderWidth:2,marginLeft:20, display:'flex',alignItems:"center",justifyContent:'center'}}>
                <Qr/>
            </View>
        </View>
        <Text style={{color:'#fff', fontSize:22,marginLeft:22, marginTop:'20%',}}>
            Recent :
        </Text>
        <View style={{display:'flex',flexDirection:'row',width:'80%',justifyContent:'space-around',marginLeft:'10%',marginTop:'10%'}}>
            <Round></Round>
            <Round></Round>
            <Round></Round>
            <Round></Round>
           

        </View>
        <View style={{display:'flex',flexDirection:'row',width:'80%',justifyContent:'space-around',marginLeft:'10%',marginTop:'10%'} }>
            
            <ScrollView horizontal >
            <Round></Round>
            <Round></Round>
            <Round></Round>
            <Round></Round>
            <Round></Round>
            <Round></Round>
            <Round></Round>
            <Round></Round>
            </ScrollView>
            

        </View>
        <Text style={{color:'#fff',fontSize:22, marginLeft:20}}>
            Bills :
        </Text>
        <View style={{display:'flex',flexDirection:'row',width:'80%',justifyContent:'space-around',marginLeft:'10%',marginTop:'10%'}}>
            <Round styles={{backgroundColor:'#F11E83'}}></Round>
            <Round ></Round>
            <Round></Round>
            <Round></Round>
            
          
        </View>
        <View style={{display:'flex',flexDirection:'row',width:'80%',justifyContent:'space-around',marginLeft:'10%',marginTop:'10%'}}>
            <Round styles={{backgroundColor:'#F11E83'}}></Round>
            <Round ></Round>
            <Round></Round>
            <Round></Round>
            
          
        </View>
        <View style={{display:'flex',flexDirection:'row',width:'80%',justifyContent:'space-around',marginLeft:'10%',marginTop:'10%'}}>
            <Round styles={{backgroundColor:'#F11E83'}}></Round>
            <Round ></Round>
            <Round></Round>
            <Round></Round>
            
          
        </View>

    </ScrollView>
        
</View>
        

       
      
    )
}

const sty= StyleSheet.create(
    {
        Rd:{
            backgroundColor:"#F11E83"

        },

    }
)
