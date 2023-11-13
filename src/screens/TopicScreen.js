import * as React from 'react';
import { Button, View, Text } from 'react-native';

function TopicScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Choose a Topic:</Text>
        <Button title="Numbers 1-4" onPress={() => navigation.navigate('Numbers1_4')} />
        <Button title="Go back to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    ); 
  };

export default TopicScreen;