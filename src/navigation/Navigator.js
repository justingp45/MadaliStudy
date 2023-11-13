import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../src/screens/HomeScreen';
import OptionsScreen from '../../src/screens/OptionsScreen';
import TopicScreen from '../../src/screens/TopicScreen';
import NumbersWordsScreen from '../../src/screens/NumbersWordsScreen';
import NumberQuizScreen from '../../src/screens/NumberQuizScreen';
import ResultsScreen from '../../src/screens/Score';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Options" component={OptionsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Topics" component={TopicScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Numbers1_4" component={NumbersWordsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz" component={NumberQuizScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Results" component={ResultsScreen} options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;