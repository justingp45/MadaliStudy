import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

function PlacesQuizScreen ({ navigation }) { 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, updateScore] = useState(0);
  const [count, updateCount] = useState(0);
  const [word1, updateWord1] = useState("You got Paradahan correct!");
  const [word2, updateWord2] = useState("You got Bahay correct!");
  const [word3, updateWord3] = useState("You got Banyo correct!");
  const [word4, updateWord4] = useState("You got Paliparan correct!");

  const questions = [
    {
      question: 'What is parking lot in Tagalog?',
      options: ['Paradahan', 'Bahay', 'Bahay', 'Paliparan'],
      correctAnswer: 'Paradahan',
      vocabWord: 'Paradahan',
    },
    {
      question: 'What does Bahay mean?',
      options: ['Restroom', 'Airport', 'Home', 'Parking lot'],
      correctAnswer: 'Home',
      vocabWord: 'Bahay',
    },
    {
      question: 'What is restroom in Tagalog?',
      options: ['Paradahan', 'Bahay', 'Banyo', 'Paliparan'],
      correctAnswer: 'Banyo',
      vocabWord: 'Banyo',
    },
    {
      question: 'What does Paliparan mean?',
      options: ['Home', 'Airport', 'Parking lot', 'Restroom'],
      correctAnswer: 'Airport',
      vocabWord: 'Paliparan',
    },
  ];

  const checkAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    updateCount(count + 1);
    if (isCorrect) {
      updateScore(score + 1);
    }
    if (!isCorrect) {
        if (count == 0){
          updateWord1("You need to study Paradahan!");
        }
        if (count == 1){
          updateWord2("You need to study Bahay!");
        }
        if (count == 2){
          updateWord3("You need to study Banyo!");
        }
        if (count == 3){
          updateWord4("You need to study Paliparan!");
        }
    }
    nextQuestion = currentQuestion + 1;
  };

  const checkNav = () => {
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    if (count == questions.length) {
      navigation.navigate('Results', { score, word1, word2, word3, word4 })
    }
  };

  return (
    <SafeAreaView style={styles.regular}>
      <Text style={styles.title}>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity 
        style={styles.button} 
        key={index} 
        title={option} 
        onPress={() => {checkAnswer(option); checkNav(); }} >
        <Text style={styles.text}>{option}</Text>
        </TouchableOpacity>
      ))}
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
    fontSize: 18
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

export default PlacesQuizScreen;