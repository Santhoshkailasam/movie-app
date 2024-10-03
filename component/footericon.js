import React from 'react'
import {View,Text} from 'react-native'
import * as Icon from './icons'
import { Library_icon } from './icons';
import { Search_icon } from './icons';
import { Home_icon } from './icons';
var value='#EEEEEE';
const Footericon = (props) => {
    const Border = props.Click    
    if (Border===0){
        value='#67686D';
    }
    else  if(Border===1){
        value='#0296E5';
    }
const icon={
    home:Home_icon,
    search:Search_icon,
    bookmark:Library_icon 
}
var Com= icon[props.Svg]
const Colors = props.color
return(  
     <View style ={{display:'flex',flexDirection:'column',width:100 }}>
    <Com color={Colors} style={{paddingLeft:30}} />
    <Text style={{color:value,marginTop:2,fontSize:12}}>{props.Text2}</Text>
    </View>
);
};
export default Footericon;