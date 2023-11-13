import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: 'What is one in Tagalog?',
      options: ['isa', 'dalawa', 'apat', 'tatlo'],
      correctAnswer: 'isa',
    },
    {
      question: 'What does tatlo mean?',
      options: ['one', 'two', 'three', 'four'],
      correctAnswer: 'three',
    },
    {
      question: 'What is four in Tagalog?',
      options: ['dalawa', 'apat', 'isa', 'tatlo'],
      correctAnswer: 'apat',
    },
    {
      question: 'What does dalawa mean?',
      options: ['one', 'two', 'three', 'four'],
      correctAnswer: 'two',
    },
  ];

  const handleAnswer = (answer) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz is over
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