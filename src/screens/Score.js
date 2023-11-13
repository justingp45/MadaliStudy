import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

function ResultsScreen ({ navigation }) { 
  const route = useRoute();
  const score = route.params?.score
  const word1 = route.params?.word1
  const word2 = route.params?.word2
  const word3 = route.params?.word3
  const word4 = route.params?.word4
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Your score is: {score}</Text>
      <Text>Results:</Text>
      <Text>{word1}</Text>
      <Text>{word2}</Text>
      <Text>{word3}</Text>
      <Text>{word4}</Text>
      <Button title="Go back to Topics" onPress={() => navigation.navigate('Topics')} />
    </View>
  );
};

export default ResultsScreen;