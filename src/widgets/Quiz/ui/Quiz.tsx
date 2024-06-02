import { useState } from 'react'
import { FinishSlide } from './FinishSlide/FinishSlide'
import { MainSlides } from './MainSlides/MainSlides'
import cls from './Quiz.module.scss'
import { StartSlide } from './StartSlide/StartSlide'
interface QuizProps {
	className?: string
	data: any
}

export const Quiz = ({ className, data }: QuizProps) => {
	const [startQuiz, setQuizStart] = useState(false)
	const [finishQuiz, setQuizFinish] = useState(false)
	const [questions, setQuestions] = useState(data)
	const [number, setNumber] = useState(0)
	const [userAnswers, setUserAnswers] = useState<any[]>([])

	const doStartQuiz = () => {
		setQuizStart(true)
	}
	const handleNextQuestion = (e: any) => {
		const answer = e.currentTarget.value
		if (answer === '') {
			return
		}
		if (number > 0 && userAnswers[number - 1].answer === answer) {
			return
		}

		const answerObject = {
			question: questions[number].question,
			answer,
		}
		setUserAnswers(prev => [...prev, answerObject])
		setNumber(prev => prev + 1)
		if (number === questions.length - 1) {
			setQuizFinish(true)
			setQuizStart(false)
		}
	}
	const handleBack = () => {
		if (number === 0) {
			return
		}
		const newAnswers = userAnswers.filter((answer, index) => {
			if (number - 1 === index) {
				return false
			}
			return answer
		})

		setUserAnswers(newAnswers)
		setNumber(prev => prev - 1)
	}

	return (
		<div className={cls.Quiz}>
			{startQuiz && !finishQuiz ? (
				<MainSlides
					className={cls.QuizCard}
					question={questions[number].question}
					description={questions[number].description}
					choices={questions[number].choices}
					type={questions[number].type}
					imgURL={questions[number].images}
					handlePrev={handleBack}
					handleNext={handleNextQuestion}
					questionNr={number}
					totalQuestions={questions.length}
				/>
			) : !startQuiz && finishQuiz ? (
				<FinishSlide answers={userAnswers} className={cls.FinishSlide} />
			) : (
				<StartSlide start={doStartQuiz} />
			)}
		</div>
	)
}

export type AnswerObject = {
	question: string
	answer: string
}
