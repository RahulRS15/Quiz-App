import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
        answer: "Berlin"
    },
    // Add more questions as needed
];

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="quiz">
            {showResult ? (
                <Result score={score} totalQuestions={questions.length} />
            ) : (
                <Question
                    question={questions[currentQuestion].question}
                    options={questions[currentQuestion].options}
                    onAnswer={handleAnswer}
                />
            )}
        </div>
    );
}

export default Quiz;
