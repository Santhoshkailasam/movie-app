import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
const App = () => {
    return (
      <View style={styles.container}>
        {/* Local Image */}
        <Image
          source={require('./path-to-your-image.png')}
          style={styles.image}
        />
        
        {/* Remote Image */}
        <Image
          source={{ uri: 'assets\ai.jpg' }}
          style={styles.image}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain', // or 'cover', depending on how you want the image to scale
    },
  });
  
  export default App;
  