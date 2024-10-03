import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import Search from './component/search';
import Arrow from './assets/arrow-left.svg';
import Info from  './assets/info-circle.svg';
import Footericon from './component/footericon';
const Searchnoresult = () => {
    return(
    <View style={{backgroundColor:'#242A32',flex:1}}>
         <View  style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',marginTop: 70,width:370,marginLeft:20}}>
        <Arrow/>
        <Text style={{color:'white'}}>Search</Text>
        <Info/>
        </View>
        <Search search='Spiderman'></Search>
        <Image source={require('./assets/resultno-results.png')} style={{height:76,width:76,marginLeft:190,marginTop:200}} />
        <Text style={{color:"white",fontSize:16,marginLeft:140,marginTop:23}}>We Are Sorry,We Can </Text>
        <Text style={{color:"white",fontSize:16,marginLeft:140}}>Not Find The Movie :( </Text>
        <Text style={{color:"#92929D",fontSize:12,marginLeft:140,marginTop:10}}>Find your movie by the title</Text>
        <Text style={{color:"#92929D",fontSize:12,marginLeft:160,marginTop:3}}>Categories,years,etc</Text>
    <View style={style.svgcontainer}>
      <Footericon Svg='home'      Text2="Home"  Click={0}        color="#67686D"></Footericon>
      <Footericon Svg='search'    Text2="Search"  Click={1}    color='#0296E5'></Footericon>
      <Footericon Svg='bookmark'  Text2="Library"  Click={0}   color='#67686D'></Footericon>
      </View>
    </View>
    );
    };
    const style=StyleSheet.create({
        svgcontainer:{
            marginTop:230,
            paddingLeft:50,
            borderTopColor:'#0296E5',
            borderTopWidth:1,
            paddingTop:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            
        },
        });
export default Searchnoresult;