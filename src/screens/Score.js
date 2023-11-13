import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

function ResultsScreen ({ navigation }) { 
  const route = useRoute();
  const score = route.params?.score
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Your score is: {score}</Text>
      <Button title="Go back to Topics" onPress={() => navigation.navigate('Topics')} />
    </View>
  );
};

export default ResultsScreen;