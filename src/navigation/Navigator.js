import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/HomeScreen';
import AboutScreen from '../../src/screens/AboutScreen';
import TopicScreen from '../../src/screens/TopicScreen';
import NumbersWordsScreen from '../../src/screens/NumbersWordsScreen';
import NumberQuizScreen from '../../src/screens/NumberQuizScreen';
import ResultsScreen from '../../src/screens/Score';
import PhrasesWordScreen from '../screens/PhrasesWordsScreen';
import PhrasesQuizScreen from '../screens/PhrasesQuizScreen';
import PlacesWordsScreen from '../screens/PlacesWordsScreen';
import PlacesQuizScreen from '../screens/PlacesQuizScreen';
import NumbersLongQuizScreen from '../screens/NumbersLongQuizScreen';
import PhrasesLongQuizScreen from '../screens/PhrasesLongQuizScreen';
import PlacesLongQuizScreen from '../screens/PlacesLongQuizScreen';
import NumbersAudioScreen from '../screens/NumbersAudioScreen';
import PhrasesAudioScreen from '../screens/PhrasesAudioScreen';
import PlacesAudioScreen from '../screens/PlacesAudioScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Topics" component={TopicScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Numbers1_4" component={NumbersWordsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NumberAudio" component={NumbersAudioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NumberQuiz" component={NumberQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="NumberLongQuiz" component={NumbersLongQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Phrases" component={PhrasesWordScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PhrasesAudio" component={PhrasesAudioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PhrasesQuiz" component={PhrasesQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PhrasesLongQuiz" component={PhrasesLongQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Places" component={PlacesWordsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PlacesAudio" component={PlacesAudioScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PlacesQuiz" component={PlacesQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PlacesLongQuiz" component={PlacesLongQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Results" component={ResultsScreen} options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;