import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Button, View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

function PhrasesLongQuizScreen ({ navigation }) { 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, updateScore] = useState(0);
  const [count, updateCount] = useState(0);
  const [questionCount, updateQuestionCount] = useState(0);
  const [word1, updateWord1] = useState("You got Kamusta ka correct!");
  const [word2, updateWord2] = useState("You got Salamat correct!");
  const [word3, updateWord3] = useState("You got Oo correct!");
  const [word4, updateWord4] = useState("You got Hindi correct!");

  const questions = [
    {
      question: 'What is yes in Tagalog?',
      options: ['Salamat', 'Oo', 'Hindi', 'Kamusta ka'],
      correctAnswer: 'Oo',
      vocabWord: 'Oo',
    },
    {
      question: 'What does Salamat mean?',
      options: ['Thank you', 'How are you', 'Yes', 'No'],
      correctAnswer: 'Thank you',
      vocabWord: 'Salamat',
    },
    {
      question: 'What does \"Kamusta ka\" mean?',
      options: ['Yes', 'Thank you', 'No', 'How are you'],
      correctAnswer: 'How are you',
      vocabWord: 'Kamusta ka',
    },
    {
      question: 'What is \"Thank you\" in Tagalog?',
      options: ['Salamat', 'Kamusta ka', 'Oo', 'Hindi'],
      correctAnswer: 'Salamat',
      vocabWord: 'Salamat',
    },
    {
      question: 'What does Hindi mean?',
      options: ['Yes', 'Thank you', 'No', 'How are you'],
      correctAnswer: 'No',
      vocabWord: 'Hindi',
    },
    {
      question: 'What is No in Tagalog?',
      options: ['Kamusta ka', 'Oo', 'Salamat', 'Hindi'],
      correctAnswer: 'Hindi',
      vocabWord: 'Hindi',
    },
    {
      question: 'What does Oo mean?',
      options: ['No', 'How are you', 'Thank you', 'Yes'],
      correctAnswer: 'Yes',
      vocabWord: 'Oo',
    },
    {
      question: 'What is \"How are you?\" in Tagalog?',
      options: ['Kamusta ka', 'Salamat', 'Oo', 'Hindi'],
      correctAnswer: 'Kamusta ka',
      vocabWord: 'Kamusta ka',
    },
  ];

  const checkAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    updateCount(count + 1);
    updateQuestionCount(questions.length);
    if (isCorrect) {
      updateScore(score + 1);
    }
    if (!isCorrect) {
        if (count == 0){
          updateWord3("You need to study Oo!");
        }
        if (count == 1){
          updateWord2("You need to study Salamat!");
        }
        if (count == 2){
          updateWord1("You need to study Kamusta ka!");
        }
        if (count == 3){
          updateWord2("You need to study Salamat!");
        }
        if (count == 4){
          updateWord4("You need to study Hindi!");
        }
        if (count == 5){
          updateWord4("You need to study Hindi!");
        }
        if (count == 6){
          updateWord3("You need to study Oo!");
        }
        if (count == 7){
          updateWord1("You need to study Kamusta ka!");
        }
    }
    nextQuestion = currentQuestion + 1;
  };

  const checkNav = () => {
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
    if (count == questions.length) {
      navigation.navigate('Results', { questionCount, score, word1, word2, word3, word4 })
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
        <Text style={styles.textButton}>{option}</Text>
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

export default PhrasesLongQuizScreen;