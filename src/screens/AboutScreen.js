import * as React from 'react';
import { Button, View, Text } from 'react-native';

function AboutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My name is Justin Perez. I am a CS student at CSUF. I created this app in order to be more in touch with my culture and language. I hope you enjoy!</Text>
      <Text> </Text>
      <Text>Elevator Pitch: </Text>
      <Text>It's a study app for common Tagalog phrases and words. Choose a topic and take a small quiz in order to improve memorization, and see which words you got incorrect so that you know what terms to focus on. It's a great opportunity to start learning Tagalog!</Text>
      <Text> </Text>
      <Text>Link to Proposal:</Text>
      <Text>https://docs.google.com/spreadsheets/d/1WndWgznekLAL0m5b__LL_74Aezu-elTRx6VEC9nDR84/edit?usp=sharing</Text>
      <Button
        title="Return to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default AboutScreen;