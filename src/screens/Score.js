import React from 'react';
import { View, Text, Button } from 'react-native';

const ResultsScreen = ({ score, restartQuiz }) => {
  return (
    <View>
      <Text>Your score is: {score}</Text>
      <Button title="Restart Quiz" onPress={restartQuiz} />
      <Button title="Go back to Topics" onPress={() => navigation.navigate('Topics')} />
    </View>
  );
};

export default ResultsScreen;