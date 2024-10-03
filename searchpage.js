import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import Search from './component/search';
import Arrow from './assets/arrow-left.svg';
import Info from  './assets/info-circle.svg';
import Smallcard from './component/smallcard';
import Footericon from './component/footericon';

const Searchpage = () => {
    return(
    <View style={{backgroundColor:'#242A32',flex:1}}>
         <View  style={{display: 'flex',flexDirection: 'row',justifyContent: 'space-between',marginTop: 70,width:370,marginLeft:20}}>
        <Arrow/>
        <Text style={{color:'white'}}>Search</Text>
        <Info/>
        </View>
        <Search></Search>
        
        <View style={{display:'flex',flexDirection:'row'}}>
      <Smallcard Image = {require('./assets/movie7.png')}></Smallcard>
      <View style={{display:'flex',flexDirection:'column'}}>
      <Text style={{color:'white',marginTop: 40,marginLeft:10,fontSize:16}}>SpiderMan</Text>
      <Text style={{color:'white',marginTop: 15,marginLeft:10,fontSize:16}}>* 9.5</Text>
      <Text style={{color:'white',marginTop:5,marginLeft:10,fontSize:16}}>Action</Text>
      <Text style={{color:'white',marginTop: 5,marginLeft:10,fontSize:16}}>2019</Text>
      <Text style={{color:'white',marginTop: 5,marginLeft:10,fontSize:16}}>139 minutes</Text>
      </View>
      </View>
      <View style={{display:'flex',flexDirection:'row'}}>
      <Smallcard Image = {require('./assets/movie8.png')}></Smallcard>
      <View style={{display:'flex',flexDirection:'column'}}>
      <Text style={{color:'white',marginTop: 40,marginLeft:10,fontSize:16}}>SpiderMan No way Home</Text>
      <Text style={{color:'white',marginTop: 15,marginLeft:10,fontSize:16}}>* 9.5</Text>
      <Text style={{color:'white',marginTop:5,marginLeft:10,fontSize:16}}>Action</Text>
      <Text style={{color:'white',marginTop: 5,marginLeft:10,fontSize:16}}>2019</Text>
      <Text style={{color:'white',marginTop: 5,marginLeft:10,fontSize:16}}>139 minutes</Text>
     
      </View>

      </View>
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
        marginTop:250,
        paddingLeft:50,
        borderTopColor:'#0296E5',
        borderTopWidth:1,
        paddingTop:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    });
export default Searchpage;