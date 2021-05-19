import React, { useState, useEffect, useCallback, useMemo } from 'react';

import Summary from './components/Summary'
import { questions } from './quizzes/questions.js'
import { shuffle } from './helpers.js'


export default function App() {
	// here we will, in our challenge, take all of the incorrect and 
	// correct answers and combine them into a new array of questions.
	// to be randomly mapped in the quiz component 

	const [currentQuestion, setCurrentQuestion] = useState(0);
	// sets state to false so we can flip it with a click
	const [showSummary, setShowSummary] = useState(false);
	const [score, setScore] = useState(0);


	// useMemo is useful when you want to create a reactive variable that changes based on 
	// the change of another variable. The dependecy here is what React is listening for 
	// that will trigger our change.  

	const answers = useMemo(() => {
		const returnArr = [...questions[currentQuestion].incorrectOptions, questions[currentQuestion].correctOption]

		return shuffle(returnArr)

	}, [currentQuestion])
	

	const handleAnswerButtonClick = (answerText) => {
		if( answerText === questions[currentQuestion].correctOption){
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
						<div className='answer-section'>
						{/* mapping answers to the answer-section by answerText */}
						{answers.map((answerOption) => 
						// when a question is answered you go to the next question /w handleAnswerButtonClicked
						// This is different from my new assingment. 
							<button onClick={() => handleAnswerButtonClick(answerOption)}>{answerOption}</button>
							)}
					</div>
					</div>
					{/* RETURN CODE HERE */}
				</>
			)}
		</div>
	);
}




// TO DO 
// Button that resets particular quiz.
