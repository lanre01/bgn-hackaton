"use client";  // Required for using client-side hooks like useState

import { useState } from 'react';
import Navbar from '../Components/Navbar'; // Ensure Navbar component is correctly imported

const questions = [
  {
    question: "Where can you find the Mary Seacole statue landmark?",
    options: ["Brixton", "Westminster", "Peckham"],
    correctOptionIndex: 1,  // Westminster is the correct answer
    stats: [20, 60, 20]  // Example statistics for each option
  },
  {
    question: "Which area is known for its Notting Hill Carnival celebration?",
    options: ["Camden", "Notting Hill", "Greenwich"],
    correctOptionIndex: 1,  // Notting Hill is the correct answer
    stats: [10, 80, 10]
  },
  {
    question: "Where was the first Black Cultural Archives opened in the UK?",
    options: ["Liverpool", "Brixton", "Manchester"],
    correctOptionIndex: 1,  // Brixton
    stats: [15, 70, 15]
  }
  // You can add more questions here
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  // Track the current question
  const [selectedOption, setSelectedOption] = useState(null);  // Track selected answer
  const [showResults, setShowResults] = useState(false);  // Show results after answering

  const currentQuestion = questions[currentQuestionIndex];

  // Handle the selected answer
  const handleAnswer = (index) => {
    setSelectedOption(index);
    setShowResults(true);
  };

  // Move to the next question
  const nextQuestion = () => {
    setSelectedOption(null);
    setShowResults(false);
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);  // Loop back to the first question
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar />

      {/* Page Title */}
      <h1 style={{ 
        textAlign: 'center', 
        fontSize: '36px', 
        color: '#D11B1B', 
        margin: '40px 0 20px 0'  // Extra space to ensure proper spacing
      }}>
        Daily Quiz: UK Black Culture
      </h1>

      {/* Quiz Container */}
      <div style={{ 
        padding: '40px', 
        maxWidth: '600px', 
        margin: '0 auto', 
        textAlign: 'center', 
        border: '2px solid #121211', 
        borderRadius: '10px', 
        backgroundColor: '#FFFFFF',  // White background for quiz container
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'  // Light shadow to add depth
      }}>
        
        {/* Current Question */}
        <h2 style={{ 
          fontSize: '24px', 
          marginBottom: '20px', 
          color: '#333'  // Dark color for the question
        }}>
          {currentQuestion.question}
        </h2>
        
        {/* Options List */}
        <div>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              style={{
                display: 'block',
                width: '100%',
                padding: '15px',
                margin: '10px 0',
                backgroundColor: selectedOption === index ? '#DA9F3F' : '#FFFFFF',
                color: selectedOption === index ? '#FFFFFF' : '#333',
                border: '2px solid #121211',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '18px',
                fontWeight: 'bold',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Results Section */}
        {showResults && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: selectedOption === currentQuestion.correctOptionIndex ? '#1E7D58' : '#D11B1B' }}>
              {selectedOption === currentQuestion.correctOptionIndex ? 'Correct!' : 'Incorrect.'}
            </p>
            
            {/* Show Percentile Stats */}
            <p style={{ fontSize: '16px', fontWeight: 'normal', color: '#333' }}>Percent of users who selected each option:</p>
            <ul style={{ listStyleType: 'none', padding: '0', color: '#333' }}>
              {currentQuestion.stats.map((stat, index) => (
                <li key={index} style={{ fontSize: '16px', marginBottom: '10px' }}>
                  {currentQuestion.options[index]}: {stat}%
                </li>
              ))}
            </ul>

            {/* Next Question Button */}
            <button
              onClick={nextQuestion}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#1E7D58',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              Next Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
