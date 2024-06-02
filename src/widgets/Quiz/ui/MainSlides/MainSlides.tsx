import { DefaultButton } from '@/shared/ui/Buttons/DefaultButton/DefaultButton'
import { useState } from 'react'
import { AnswerObject } from '../Quiz'
import cls from './MainSlides.module.scss'

import { NextQButton } from '@/shared/ui/Buttons/NextQButton/NextQButton'
import { ArrowLeftIcon } from '@/shared/ui/Icons/ArrowLeftIcon/ArrowLeftIcon'
import { OkIcon } from '@/shared/ui/Icons/OkIcon/OkIcon'
import Bonus from '@/widgets/Bonus/Bonus'

type MainSlidesProps = {
	className?: string
	question: string
	description: string | null
	choices: string[]
	type: string
	imgURL: string[] | undefined
	handlePrev: () => void
	handleNext: (e: React.MouseEvent<HTMLButtonElement>) => void
	userAnswer?: AnswerObject | undefined
	questionNr?: number
	totalQuestions?: number
}

export const MainSlides = ({
	className,
	question,
	description,
	choices,
	type,
	imgURL,
	handlePrev,
	handleNext,
	userAnswer,
	questionNr,
	totalQuestions,
}: MainSlidesProps) => {
	const [answer, setAnswer] = useState('')
	const handleClean = (e: any) => {
		handleNext(e)
		setAnswer('')
	}

	return (
		<div className={className}>
			<div className={cls.Left}>
				<div className={cls.Body}>
					<p className={cls.Question}>{question}</p>
					{description ? (
						<p className={cls.Description}>{description}</p>
					) : null}
					<div
						className={`${cls.Answers} ${
							type === 'IA' ? cls.ListIA : cls.List
						}`}
					>
						{/* <div className={`${cls.Answers} ${cls.List}`}> */}
						{choices.map((choice, i) => (
							<div
								className={type === 'IA' ? cls.IAContent : cls.Content}
								// className={cls.Content}
								key={`k${i}`}
							>
								<input
									className={cls.Checkbox}
									type='checkbox'
									id={choice}
									checked={answer === choice}
									onChange={() => setAnswer(choice)}
								/>
								<label
									htmlFor={choice}
									className={`${cls.Answer} ${
										type === 'TA' ? cls.TAContent : null
									}`}
								>
									{type === 'IA' ? <img src={imgURL![i]} /> : null}
									{type === 'TA' ? <span className={cls.Round} /> : null}
									<p className={cls.Choice}>{choice}</p>
								</label>
								{type === 'IA' ? (
									<span className={cls.ImgChecked}>
										<OkIcon fill='#fff' className={cls.OkIcon} />
									</span>
								) : null}
							</div>
						))}
					</div>
				</div>
				<div className={cls.Footer}>
					<div className={cls.Navigation}>
						<DefaultButton onClick={handlePrev}>
							<span className={cls.PrevBtn}>
								<ArrowLeftIcon fill='white' />
							</span>
						</DefaultButton>
						<NextQButton
							text='Далее'
							className={cls.Submit}
							value={answer}
							onClick={handleClean}
						/>
					</div>

					<div className={cls.ProgressWrapper}>
						<p className={cls.ProgressText}>
							Готово:
							<span className={cls.ProgressTextGold}> {questionNr! * 20}%</span>
						</p>
						<div className={cls.Progress}>
							<span
								className={cls.Fraction}
								style={{
									width: `calc(16.6666666667% * ${
										questionNr === 0 ? -1 : questionNr
									})`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className={cls.Right}>
				<span className={cls.Space}></span>
				<Bonus
					img='/img/quiz/bonus1.png'
					description='Скачать презентацию'
					className={cls.Bonus}
				/>
				<Bonus
					img='/img/quiz/bonus2.png'
					description='Скидка до 10%'
					className={cls.Bonus}
				/>
			</div>
		</div>
	)
}
