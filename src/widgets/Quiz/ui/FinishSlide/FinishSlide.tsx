import PolicyCheckbox from '@/shared/ui/PolicyCheckbox/PolicyCheckbox'
import cls from './FinishSlide.module.scss'

import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import Bonus from '@/widgets/Bonus/Bonus'
import axios from 'axios'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
interface FinishSlideProps {
	className?: string
	answers: any
}

export const FinishSlide = ({ className, answers }: FinishSlideProps) => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			username: '',
			phone: '',
		},
	})

	const onSubmit = (data: any) => {
		const output = {
			...data,
			...answers,
		}
		console.log(output)
		axios
			.post('/calc-quiz', JSON.stringify(output))
			.then(
				response =>
					(window.parent.location.href =
						'https://simter-st.ru/spasibo-marquiz/')
			)
	}

	return (
		<div className={`${className} ${cls.Finish}`}>
			<div className={cls.Left}>
				<div className={cls.Body}>
					<div className={cls.Header}>
						<p className={cls.Title}>
							Напишите свой контактный номер телефона, мы вышлем вам почтой
							образцы нашей продукции бесплатно
						</p>
					</div>
					<p className={`${cls.BText} ${cls.BonusText}`}>Ваши бонусы</p>
					<div className={cls.BonusContainer}>
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
				<div className={cls.Footer}>
					<div className={cls.ProgressWrapper}>
						<p className={cls.ProgressText}>
							Готово:
							<span className={cls.ProgressTextGold}> 95%</span>
						</p>
						<div className={cls.Progress}>
							<span
								className={cls.Fraction}
								style={{
									width: `95%`,
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={cls.Right}>
				<form onSubmit={handleSubmit(onSubmit)} className={cls.Form}>
					<div className={cls.Entity}>
						<label
							htmlFor='username'
							className={`${cls.BText} ${cls.InputLabel}`}
						>
							Ваше имя
						</label>
						<Controller
							name='username'
							control={control}
							render={({ field }) => (
								<input
									type='text'
									id='username'
									className={cls.Input}
									required
									{...field}
								/>
							)}
						/>
					</div>
					<div className={cls.Entity}>
						<label htmlFor='phone' className={`${cls.BText} ${cls.InputLabel}`}>
							Номер телефона
						</label>
						<Controller
							name='phone'
							control={control}
							render={({ field }) => (
								<PhoneInput
									containerClass={cls.PhoneContainer}
									inputClass={cls.Input}
									country={'ru'}
									inputProps={{
										required: true,
									}}
									onlyCountries={['ru']}
									autoFormat={true}
									placeholder='Номер телефона'
									specialLabel=''
									{...field}
								/>
							)}
						/>
					</div>
					<PolicyCheckbox className={cls.Policy} />
					<PrimaryButton
						text='Получить каталог, подарки и скидку'
						type='submit'
					/>
				</form>
			</div>
		</div>
	)
}
