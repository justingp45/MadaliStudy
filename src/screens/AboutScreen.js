import * as React from 'react';
import { Linking, StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';

function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.regular}>
      <Text style={styles.text}>My name is Justin Perez. I am a CS student at CSUF. I created this app in order to be more in touch with my culture and language. I hope you enjoy!</Text>
      <Text> </Text>
      <Text style={styles.title}>Elevator Pitch: </Text>
      <Text style={styles.text}>It's a study app for common Tagalog phrases and words. Choose a topic and take a small quiz in order to improve memorization, and see which words you got incorrect so that you know what terms to focus on. It's a great opportunity to start learning Tagalog!</Text>
      <Text> </Text>
      <Text style={styles.title}>Link to Proposal:</Text>
      <Text style={styles.text} onPress={() => Linking.openURL('https://docs.google.com/spreadsheets/d/1WndWgznekLAL0m5b__LL_74Aezu-elTRx6VEC9nDR84/edit?usp=sharing')}>Press to open link</Text>
      <Text> </Text>
      <Text style={styles.title}>Philippines flag from:</Text>
      <Text style={styles.text}>https://www.stockio.com/free-clipart/flag-of-the-philippines</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Home')} >
        <Text style={styles.textButton}>Go back to Home</Text>
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
  text: {
    fontFamily: 'Futura',
  },
  title: {
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center'
  },
  button: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#0BB3FC",
    padding: 12
  },
  textButton: {
    fontFamily: 'Futura',
    color: "white"
  }
});

export default AboutScreen;
