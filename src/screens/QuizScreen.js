import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

function QuizScreen ({ navigation }) { 
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, updateScore] = useState(0);

  const questions = [
    {
      question: 'What is one in Tagalog?',
      options: ['isa', 'dalawa', 'apat', 'tatlo'],
      correctAnswer: 'isa',
      vocabWord: 'isa',
    },
    {
      question: 'What does tatlo mean?',
      options: ['one', 'two', 'three', 'four'],
      correctAnswer: 'three',
      vocabWord: 'tatlo',
    },
    {
      question: 'What is four in Tagalog?',
      options: ['dalawa', 'apat', 'isa', 'tatlo'],
      correctAnswer: 'apat',
      vocabWord: 'apat',
    },
    {
      question: 'What does dalawa mean?',
      options: ['one', 'two', 'three', 'four'],
      correctAnswer: 'two',
      vocabWord: 'dalawa',
    },
  ];

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      updateScore(score + 1);
    }
    nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigation.navigate('Results', { score })
    }
  };

  return (
    <View>
      <Text>{questions[currentQuestion].question}</Text>
      {questions[currentQuestion].options.map((option, index) => (
        <Button key={index} title={option} onPress={() => handleAnswer(option)} />
      ))}
      <Text>Score: {score}</Text>
    </View>
  );
};

export default QuizScreen;