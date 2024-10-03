import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import ImageSvg from './assets/Search.svg';
import Secondsvg from './assets/Home.svg';
import Search from './component/search';
import Bigcard from './component/Big_card';
import Options from './component/options';
import Smallcard from './component/smallcard';
import Footericon from './component/footericon';
const Home = () => {
    return(
        <View style={{backgroundColor:'#242A32',flex:1}}> 
            <Text style={style.maintext}>What do you want to watch?</Text>
           <Search></Search>
           <View style={{display:'flex',flexDirection:'row'}}>
           <Bigcard Image={require('./assets/movie-1.png')} ></Bigcard>
           <Bigcard Image={require('./assets/movie-2.png')}></Bigcard>
           </View>
           <View style={{display:'flex',flexDirection:'row'}}>
           <Options Text="Now playing" Click={1}></Options>
           <Options Text="Upcoming" Click={0}></Options>
           <Options Text="Top rated" Click={0}></Options>
           <Options Text="Popular" Click={0}></Options>
           </View>
           <View style={{display:'flex',flexDirection:'row'}}>
           <Smallcard Image={require('./assets/Movie.png')}></Smallcard>
           <Smallcard Image={require('./assets/Movie-3.png')}></Smallcard>
           <Smallcard Image={require('./assets/Movie-4.png')}></Smallcard>
           </View>
           <View style={{display:'flex',flexDirection:'row'}}>
           <Smallcard Image={require('./assets/Movie-5.png')}></Smallcard>
           <Smallcard Image={require('./assets/Movie-6.png')}></Smallcard>
           <Smallcard Image={require('./assets/Movie-7.png')}></Smallcard>
           </View>
           <View style={style.svgcontainer}>
           <Footericon Svg='home' Text2="Home" ></Footericon>
           <Footericon Svg='search' Text2="Search" ></Footericon>
           <Footericon Svg='bookmark'Text2="Library"></Footericon>
           </View>

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
img3:{
    width:100,
    height:145.92,
    marginTop:30,
    marginLeft:29
},
main:{
    backgroundColor:'#3A3F47',
    marginLeft: 20,
    width:327,
    height:42,
    borderRadius:15,
    marginTop:30,
    flexDirection:'row'
},
maintext:{
    color:'white',
    marginTop:40,
    fontSize:18,
    marginLeft:25,
},
search:{
    color:'#67686D',
    marginLeft:30,
    marginTop:9,
    fontSize:14,
},
text2:{
    marginTop:70,
    color:'white',
    borderBottomColor:'gray',
    borderBottomWidth:3,
    fontSize:14,
    width:90,
    height:30,
    marginLeft: 29
},
svgcontainer:{
    marginTop:15,
    paddingLeft:50,
    borderTopColor:'#0296E5',
    borderTopWidth:1,
    paddingTop:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
},
});
export default Home;