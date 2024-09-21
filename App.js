import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text,TextInput,StyleSheet} from 'react-native';
const Sk = () =>{
  return(
    <View style = {styles.maincontainer}>
    <View style = {styles.inbox}>
    <Text style = {styles.head}>Welcome</Text>
    <Text style={styles.text}>Name:</Text>
    <TextInput 
    style = {styles.input1}
    placeholder='Name'
      />
      <Text style={styles.text2}>Email</Text>
      <TextInput 
    style = {styles.input2}
    placeholder='Email'
      />
      <Text style={styles.text2}>Password</Text>
      <TextInput 
    style = {styles.input2}
    placeholder='Password'
      />
       <View style={{marginTop:20,marginLeft: 170}}>
      <TouchableOpacity style={{backgroundColor:'blue',width:90,height:40,paddingLeft:12,paddingTop:4,borderRadius:8}}><Text style={{fontSize:20,color:'white'}}>Submit</Text></TouchableOpacity>
    </View>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
maincontainer:{
  color:'blue',
  marginTop:200
},
head:{
  color:'blue',
    marginLeft:100,
    marginBottom:30,
    marginTop:18,
    fontSize:50
},
input1:{
  borderColor:'black',
  borderWidth :2,
  width:300, 
  marginLeft:60,
  paddingLeft:10,
  borderRadius:10,
  height:50,
  marginTop:8
},
text:{
  marginLeft:65,
  fontSize:20
},
inbox:{
  borderColor:'red',
  borderWidth:2,
  height:500,
  borderRadius:10,
  width:400,
  marginLeft:5
},
input2:{
  borderColor:'black',
    borderWidth :2,
    width:300,
     marginLeft:60,
     paddingLeft:10,
     borderRadius:10,
     height:50,
     marginTop:8
},
text2:{
  marginLeft:65,
    fontSize:20,
    marginTop:8
}
})
export default Sk;
