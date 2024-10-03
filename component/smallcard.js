import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
const Smallcard = (props) => {
return(
    <View>
       <Image source={props.Image} style={style.img3}/>
    </View>
  
);
};
const style = StyleSheet.create({
    img3:{
        width:100,
        height:145.92,
        marginTop:30,
        marginLeft:29
    },
});
export default Smallcard;