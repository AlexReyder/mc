import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import cls from './StartSlide.module.scss'

import Bonus from '@/widgets/Bonus/Bonus'

interface StartSlideProps {
	className?: string
	start?: () => void
}

export const StartSlide = ({ className, start }: StartSlideProps) => {
	return (
		<div
			className={cls.Start}
			style={{
				backgroundImage: ` linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 35%, rgba(0, 0, 0, 0.5) 100%), url(${'/img/quiz/start.webp'})`,
			}}
		>
			<div className={cls.Wrapper}>
				<h1 className={cls.Heading}>
					Ответьте на 4 вопроса и получите: презентацию и дополнительную скидку
					до 10%
				</h1>
				<PrimaryButton text='Получить подарок' onClick={start} />
				<div className={cls.BonusWrapper}>
					<p className={cls.BonusText}>БОНУСЫ ПОСЛЕ ПРОХОЖДЕНИЯ ТЕСТА</p>
					<div className={cls.BonusContainer}>
						<Bonus
							img='/img/quiz/bonus1.png'
							description='Скачать презентацию'
						/>
						<Bonus img='/img/quiz/bonus2.png' description='Скидка до 10%' />
					</div>
				</div>
			</div>
		</div>
	)
}
