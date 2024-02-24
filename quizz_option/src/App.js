import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './quizz.css'

function App() {
  const questions = [
    {
      id: 1,
      question: 'What is the capital of India?',
      options: ['Delhi', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Delhi'
    },
    {
      id: 2,
      question: 'Which programming language ?',
      options: ['Jaava', 'Pyython', 'JavaScript', 'C++1'],
      correctAnswer: 'JavaScript'
    },
    {
      id: 3,
      question: 'What is the largest ?',
      options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      correctAnswer: 'Jupiter'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption('');
  };

  const handleSubmit = () => {
   
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

     };

  return (
    <><div className="headername">
      
      <h1 className='first_h'>Quiz Application</h1>
      </div>

    <div className='question_box' style={{ textAlign: 'center', padding: '20px' }}>
        {currentQuestion < questions.length ? (
          <>
            <h1>{questions[currentQuestion].question}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  style={{
                    padding: '10px',
                    margin: '5px',
                    width: '200px',
                    cursor: 'pointer',
                    backgroundColor: selectedOption === option ? '#4caf50' : 'rgba(255, 255, 255, 0.7)',
                    color: 'black'
                    
                  }}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              style={{
                padding: '10px',
                margin: '10px',
                cursor: 'pointer',
                backgroundColor: '#2196f3',
                color: '#fff'
              }}
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              Next Question
            </button>
            {currentQuestion === questions.length - 1 && (
              <button
                style={{
                  padding: '10px',
                  margin: '10px',
                  cursor: 'pointer',
                  backgroundColor: '#ff7f50',
                  color: 'white'
                }}
                onClick={handleSubmit}
                disabled={!selectedOption}
              >
                Submit
              </button>
            )}
          </>
        ) : (
          <div>
            <h1>Quiz Completed!</h1>
            <p>Your Score: {score - 1} out of {questions.length}</p>
          </div>
        )}
      </div>
      
      </>
  );
}

export default App;
