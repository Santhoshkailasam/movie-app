import React from 'react';
import { View, Text } from 'react-native';

const L = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, color: 'blue', marginTop: 20 }}>
        Hello, Inline Styles!
      </Text>
    </View>
  );
};

export default L;
