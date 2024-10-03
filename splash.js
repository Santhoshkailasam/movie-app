import React from 'react'
import {View,Text,Image} from 'react-native'
const Splash = () => {
    return(
        <View style={{backgroundColor:'#242A32',flex:1}}>
            <View style={{alignItems:'center',marginTop:311}}>
                <Image source={require('./assets/popcorn 1.png')} style ={{width:189,height:189,resizeMode: 'contain',}} />
            </View> 
        </View>
    );
};
export default Splash;