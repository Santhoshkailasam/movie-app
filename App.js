import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  TextInput,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  
  
  
} from "react-native";
import Landing from "./landing";
import Main from "./Main";
import Round from "./component/Round";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Home from "./Login";
import { Learn } from "./Learn";
const Stack= createStackNavigator();

export default function App() {
  const dt= 
  [{id:'3',title:'dknk'}]  
  var item= "Login"
  function pres(){
    item ="sigin"
    
  }

  
  return (
    <>
    <NavigationContainer >
      <Stack.Navigator initialRouteName="splash" >
        
        <Stack.Screen name="main" component={Main}></Stack.Screen>
        <Stack.Screen name="login" component={Home}></Stack.Screen>
        <Stack.Screen name="splash" component={Landing}></Stack.Screen>
        <Stack.Screen name="learn"  component={Learn}></Stack.Screen>
      </Stack.Navigator>


    </NavigationContainer>
    
    </>
    
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#B2D8C5",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#301BEA",
    borderWidth: 3,
    marginTop: 4,
  },
  Box: {
    width: 150,
    height: 150,
    marginTop:8,
    backgroundColor: "#333333",
    borderRadius:10,
    opacity:1,
  },
  Con:{
    
        
          width: "200",
          display: "flex",
          flexDirection:'row',

          justifyContent: "space-around",
          borderColor: "#9611FF",
          borderWidth:3,
  },
});
