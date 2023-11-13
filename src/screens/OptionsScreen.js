import * as React from 'react';
import { Button, View, Text } from 'react-native';

function OptionsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Options</Text>
        <Text>Still in Progress!</Text>
        <Button title="Go back to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  };

export default OptionsScreen;