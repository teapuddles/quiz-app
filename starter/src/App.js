import React, { useState, useEffect } from 'react';


import Summary from './components/Summary'
import { questions } from './quizzes/questions.js'


export default function App() {
	// here we will, in our challenge, take all of the incorrect and 
	// correct answers and combine them into a new array of questions.
	// to be randomly mapped in the quiz component 

	const [allAnswers, setAllAnswers] = useState([])
	// using this empty array, we'll combine both our correct + incorrect answers
	// we'll compare what was clicked to correctOptions.answerText 

	const [currentQuestion, setCurrentQuestion] = useState(0);
	// sets state to false so we can flip it with a click
	const [showSummary, setShowSummary] = useState(false);
	const [score, setScore] = useState(0);


	useEffect(() => {
		return console.log(questions[currentQuestion].correctOptions, questions[currentQuestion].incorrectOptions)
	},[currentQuestion])



	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect === true){
			setScore(score + 1)
		}
		// This logic for moving to the next question will 
		// likely need to be in a separate function in test. 
		const nextQuestion = currentQuestion + 1
		setCurrentQuestion(nextQuestion)
		// this will break without this
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion)
			// call answer randomizer? 
		}else{
			setShowSummary(true)
		}
	}

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}

	  {/* this terary below is going to be what renders our score component */}
			{showSummary ? (
				<Summary />
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						{/* in challenge will have to import the questions array.
						Also, the structure of the answers is different, too. 
						
						currentQuestion comes from state and makes our questions/answers
						more dynamic. */}
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					{/* RETURN CODE HERE */}
				</>
			)}
		</div>
	);
}


// {/* <div className='answer-section'>
// 						{/* mapping answers to the answer-section by answerText */}
// 						{questions[currentQuestion].answerOptions.map((answerOption) => 
// 						// when a question is answered you go to the next question /w handleAnswerButtonClicked
// 						// This is different from my new assingment. 
// 							<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
// 							)}
// 					</div> */}

// TO DO 
// Button that resets particular quiz.
