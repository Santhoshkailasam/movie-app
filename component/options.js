import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
var value=0;
 function Options(props){
    const Border = props.Click    
    if (Border===0){
        value=0;
    }
    else  if(Border===1){
        value=3;
    }
return(
        <View >
                <Text style={{marginTop:20,color:'white',borderBottomColor:'gray',borderBottomWidth:value,fontSize:14,width:82,height:30,marginLeft: 29}}>{props.Text}</Text>
         </View> 
  
);
};

export default Options;