import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Madali Study!</Text>
      <Button
        title="Start Game"
        onPress={() => navigation.navigate('Topics')}
      />
      <Button
        title="Options"
        onPress={() => navigation.navigate('Options')}
      />
      <Button
        title="About Me"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default HomeScreen;