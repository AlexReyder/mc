import PolicyCheckbox from '@/shared/ui/PolicyCheckbox/PolicyCheckbox'
import cls from './FinishSlide.module.scss'

import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import Bonus from '@/widgets/Bonus/Bonus'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
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
	const [isPolicy, setIsPolicy] = useState(true)
	const [isPolicyErr, setIsPolicyErr] = useState(false)
	const router = useRouter()

	const handlePolicyChange = () => {
		setIsPolicy(!isPolicy)
	}

	const onSubmit = (data: any) => {
		console.log(answers)
		const formDt = new FormData()
		formDt.append('username', data.username)
		formDt.append('phone', data.phone)
		formDt.append('quiz', JSON.stringify(answers))
		if (isPolicy) {
			axios
				.post(`${process.env.domainUrl}/api/mail/quiz`, formDt, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(response => {
					setIsPolicyErr(false)
					router.push('/spasibo-quiz')
				})
		} else {
			setIsPolicyErr(true)
		}
	}

	return (
		<div className={`${className} ${cls.Finish}`}>
			<div className={cls.Left}>
				<div className={cls.Body}>
					{/* <div className={cls.Header}>
						<p className={cls.Title}>
							Напишите свой контактный номер телефона, мы вышлем вам почтой
							образцы нашей продукции бесплатно
						</p>
					</div> */}
					<p className={`${cls.BText} ${cls.BonusText}`}>Ваши бонусы</p>
					<div className={cls.BonusContainer}>
						<Bonus
							img='/img/quiz/bonus1.png'
							description='Скачать презентацию'
							className={cls.Bonus}
							textClass={cls.BonusTextClass}
						/>
						<Bonus
							img='/img/quiz/bonus2.png'
							description='Скидка до 10%'
							className={cls.Bonus}
							textClass={cls.BonusTextClass}
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
					<PolicyCheckbox className={cls.Policy} change={handlePolicyChange} />
					{!isPolicyErr ? null : (
						<p style={{ fontSize: '14px', color: 'red', marginBottom: '10px' }}>
							Подтвердите согласие на обработку персональных данных
						</p>
					)}
					<PrimaryButton
						text='Получить каталог, подарки и скидку'
						type='submit'
						theme='Dark'
					/>
				</form>
			</div>
		</div>
	)
}
