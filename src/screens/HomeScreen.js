import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Start Game"
        onPress={() => navigation.navigate('Topics')}
      />
      <Button
        title="Options"
        onPress={() => navigation.navigate('Options')}
      />
    </View>
  );
};

export default HomeScreen;