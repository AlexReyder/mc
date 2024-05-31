//@ts-nocheck
'use client'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { ModalInput } from '@/shared/ui/Inputs/ModalInput/ModalInput'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import PolicyCheckbox from '@/shared/ui/PolicyCheckbox/PolicyCheckbox'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import cls from './CTASection.module.scss'
interface CustomProjectProps {
	className?: string
	heading: string
	bg: string
}

export const CTASection = ({ className, heading, bg }: CustomProjectProps) => {
	const { control, register, reset, handleSubmit } = useForm({
		defaultValues: {
			username: '',
			phone: '',
			square: '',
			question: '',
			theme: 'Консультация',
		},
	})

	const [isPolicy, setIsPolicy] = useState(true)

	const router = useRouter()

	const onSubmit = (data: any) => {
		if (isPolicy) {
			axios
				.post(`${process.env.domainUrl}/api/mail`, data)
				.then(res => {
					reset()
					setIsSend('Отправлено')
				})
				// .then(response => router.push('/spasibo'))
				.catch(e => console.log(e))
		}
	}

	const handlePolicyChange = () => {
		setIsPolicy(!isPolicy)
	}

	return (
		<Section className={cls.CTA}>
			<Container className={cls.Container}>
				<div className={cls.Wrapper}>
					<div className={cls.Left}>
						<Headings title='Оставить заявку' color='w' />
						<h3 className={cls.Subheading}>
							Оставьте свои данные и наш менеджер поможет подобрать подходящий
							вариант под ваш запрос
						</h3>
					</div>
					<div className={cls.Right}>
						<form onSubmit={handleSubmit(onSubmit)} className={cls.Form}>
							<div className={cls.Entity}>
								<label className={cls.Label} htmlFor='ctaname'>
									Ваше имя *
								</label>
								<Controller
									name='username'
									control={control}
									render={({ field }) => (
										<ModalInput
											id='ctaname'
											placeholder='Имя'
											required
											{...field}
										/>
									)}
								/>
							</div>
							<div className={cls.Entity}>
								<label className={cls.Label} htmlFor='phone'>
									Номер телефона *
								</label>
								<Controller
									name='ctaphone'
									control={control}
									render={({ field }) => (
										<PhoneInput
											id='ctaphone'
											containerClass={cls.PhoneContainer}
											inputClass={cls.ModalInput}
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
							<div className={cls.Entity}>
								<label className={cls.Label} htmlFor='ctaname'>
									Площадь м²
								</label>
								<Controller
									name='square'
									control={control}
									render={({ field }) => (
										<ModalInput id='ctaname' placeholder='15 м²' {...field} />
									)}
								/>
							</div>
							<div className={cls.Entity}>
								<label className={cls.Label} htmlFor='ctaname'>
									Уточнения
								</label>
								<Controller
									name='square'
									control={control}
									render={({ field }) => (
										<ModalInput
											id='ctaname'
											placeholder='У меня есть вопрос..'
											{...field}
										/>
									)}
								/>
							</div>
							<PolicyCheckbox change={handlePolicyChange} />
							<div className={cls.Submit}></div>
							<PrimaryButton text='Отправить' type='submit' />
						</form>
					</div>
				</div>
			</Container>
		</Section>
	)
}
