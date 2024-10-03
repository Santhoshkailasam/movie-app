import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import ImageSvg from '../assets/Search.svg';
const Search = (props) => {
    const Spider=props.search
return(
    <View>
    <View style={style.main}>
        <Text  style={style.search}>{Spider}</Text>
        <ImageSvg style={{marginLeft:210,marginTop:10}}/>
    </View>
    </View>
);
};
const style = StyleSheet.create({
    maintext:{
        color:'white',
        marginTop:40,
        fontSize:18,
        marginLeft:25,
    },
    main:{
        backgroundColor:'#3A3F47',
        marginLeft: 20,
        width:331,
        height:42,
        borderRadius:15,
        marginTop:30,
        flexDirection:'row'
    },
    search:{
        color:'#ffff',
        marginLeft:30,
        marginTop:9,
        fontSize:14,
    },
});
export default Search;