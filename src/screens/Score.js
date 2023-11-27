import React from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

function ResultsScreen ({ navigation }) { 
  const route = useRoute();
  const score = route.params?.score
  const word1 = route.params?.word1
  const word2 = route.params?.word2
  const word3 = route.params?.word3
  const word4 = route.params?.word4
  return (
    <SafeAreaView style={styles.regular}>
      <Text style={styles.title}>Your score is: {score}</Text>
      <Text> </Text>
      <Text style={styles.title}>Results:</Text>
      <Text style={styles.study}>{word1}</Text>
      <Text style={styles.study}>{word2}</Text>
      <Text style={styles.study}>{word3}</Text>
      <Text style={styles.study}>{word4}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Topics')} >
        <Text style={styles.text}>Go back to Topics</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  regular: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  study: {
    fontStyle: 'italic',
    fontSize: 16
  },
  button: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#0BB3FC",
    padding: 12
  },
  text: {
    color: "white"
  }
});

export default ResultsScreen;