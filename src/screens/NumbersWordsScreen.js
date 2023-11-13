import * as React from 'react';
import { Button, View, Text } from 'react-native';

function NumbersWordsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List of Words:</Text>
        <Text>isa = one</Text>
        <Text>dalawa = two</Text>
        <Text>tatlo = three</Text>
        <Text>apat = four</Text>
        <Button title="Start Quiz" onPress={() => navigation.navigate('Quiz')} />
        <Button title="Go back to Topics" onPress={() => navigation.navigate('Topics')} />
      </View>
    ); 
  };

export default NumbersWordsScreen;