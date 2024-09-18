
import { View,Text,ImageBackground,StyleSheet, Button} from "react-native";
const Hi =(pr)=> {
  return(
    <Text>
      hi+{pr.tt}
    </Text>
  )
}
export default function Home(props){
  console.log(props);
    return(
        <>
        <><ImageBackground style={{flex:1} } source={require('./assets/modern-finish-and-attractive-design-wallpaper-for-living-room-255 1.png')}>

<View style={{backgroundColor: '#ddd', opacity:0.8 ,flex:1,marginTop:20,}}>
      <View id="topbar">
        <View>
          <View></View>
          <View></View>
          <Hi tt='h'></Hi>
        </View>
        <View>

        </View>
      </View>
      
      <View style={styles.Con}>
          <View style={styles.Box}>

          </View>
        <View
          style={styles.Box}
        >

        </View>
      </View>
      <View style={styles.Con}>
          <View style={styles.Box}>

          </View>
        <View
          style={styles.Box}
        >

        </View>
      </View>
      <View style={styles.Con}>
          <View style={styles.Box}>

          </View>
        <View
          style={styles.Box}
        >
          <Button  title="press" onPress={() => props.navigation.navigate('main')}></Button>

        </View>
      </View>
     

</View>
      
    </ImageBackground >
    
    </>
        </>
    )

  }

  const styles = StyleSheet.create
  (

    {

    }
  )