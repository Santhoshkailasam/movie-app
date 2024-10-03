import React from 'react'
import {Text,View,Image} from 'react-native'
import Arrow from '../assets/arrow-left.svg';
import Info from  '../assets/info-circle.svg';
const Headericon = (props) =>{
    return(
        <View style={{backgroundColor:'#242A32',flex:1}}>
        <View  style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',marginTop: 70,width:370,marginLeft:20}}>
       <Arrow/>
       <Text style={{color:'white'}}>Search</Text>
       <Info/>
       </View>
       </View>
    );
};
export default Headericon;