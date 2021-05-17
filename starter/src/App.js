import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	

	const handleAnswerButtonClick = () => {
		const nextQuestion = currentQuestion + 1

	}
	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{false ? (
				<div className='score-section'>You scored 1 out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question 1</span>/{questions.length}
						</div>
						{/* in challenge will have to import the questions array.
						Also, the structure of the answers is different, too. 
						
						currentQuestion comes from state and makes our questions/answers
						more dynamic. */}
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{/* mapping answers to the answer-section by answerText */}
						{questions[currentQuestion].answerOptions.map((answerOption) => 
						// when a question is answered you go to the next question /w handleAnswerButtonClicked
						// This is different from my new assingment. 
							<button onClick={handleAnswerButtonClick}>{answerOption.answerText}</button>
							)}
					</div>
				</>
			)}
		</div>
	);
}
