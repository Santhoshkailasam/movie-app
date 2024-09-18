import { FlatList, StyleSheet, Text, View } from "react-native";


export function Learn(){
    const data = [{id:1,item:"item1"},{id:2,item:"item2"}]
    const add=()=>{
         
    }

    
    return(
        <>
        <View style={style.bg}>
            <View nativeID="alarm_bar" style={style.bar}>
                <Text style={style.txt_large}>Alarm</Text>
               <View style={{width:100,display:'flex',flexDirection:'row',justifyContent:"space-around",alignItems:'center'}}>
                    <Text onPress={()=>{console.log("presed add");}} style={style.txt_icon}>add</Text>
                    <Text style={style.txt_icon}>more</Text>

               </View> 
            </View>
            <View nativeID="alarm_space">
            </View>
            <FlatList
             data={data}
             renderItem={({item})=>(<View>
                <Text style={{color:"#fff"}}>{item.item}</Text>
             </View>)}

             >

            </FlatList>
        </View>
        
        </>
    )
}

const style= StyleSheet.create({
    bg:{
        backgroundColor:"#191919",
        flex:1
    },
    bar:{
        display:'flex',
        flexDirection:"row",
        width:"100%",
        height:40,
        alignItems:"center",
        justifyContent:"space-between"


    },
    txt_large:{
        color:"#fff",
        fontSize:25,
        fontStyle:"normal",
        fontWeight:'bold',
        paddingLeft:20,
    },
    txt_icon:{
        color: '#fff',
        fontSize:15,
        width:40,
        height:40,
        paddingTop:10
    }
})