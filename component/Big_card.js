import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
const Bigcard = (props) => {
return(
        <View >
                <Image source={props.Image} style={style.img2} />
         </View> 
  
);
};
const style = StyleSheet.create({
    img2:{
        width:144.61,
        height:210,
        marginLeft: 30,
        marginTop: 25
    },
});
export default Bigcard;