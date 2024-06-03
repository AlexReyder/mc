'use client'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { ModalInput } from '@/shared/ui/Inputs/ModalInput/ModalInput'
import { Modal } from '@/shared/ui/Modal'
import PolicyCheckbox from '@/shared/ui/PolicyCheckbox/PolicyCheckbox'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import cls from './ConsultationModal.module.scss'

interface ConsultationModalProps {
	isOpen: boolean
	handleClose: () => void
}

export const ConsultationModal = ({
	isOpen,
	handleClose,
}: ConsultationModalProps) => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			username: '',
			phone: '',
		},
	})
	const [isPolicy, setIsPolicy] = useState(true)
	const [isPolicyErr, setIsPolicyErr] = useState(false)
	const router = useRouter()
	const onSubmit = (data: any) => {
		if (isPolicy) {
			axios
				.post(`${process.env.domainUrl}/api/mail/consultModal`, data, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(res => {
					setIsPolicyErr(false)
					router.push('/spasibo')
				})
		} else {
			setIsPolicyErr(true)
		}
	}

	const handlePolicyChange = () => {
		setIsPolicy(!isPolicy)
	}

	return (
		<Modal type='Consult' isOpen={isOpen} onClose={handleClose}>
			<div className={cls.Wrapper}>
				<div className={cls.Left}>
					<ConsultaionHeading />
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={cls.Right}>
					<Controller
						name='username'
						control={control}
						render={({ field }) => (
							<ModalInput
								placeholder='Ваше имя'
								className={cls.NameInput}
								required
								{...field}
							/>
						)}
					/>
					<Controller
						name='phone'
						control={control}
						render={({ field }) => (
							<PhoneInput
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

					<PolicyCheckbox change={handlePolicyChange} />
					{!isPolicyErr ? null : (
						<p style={{ fontSize: '14px', color: 'red' }}>
							Подтвердите согласие на обработку персональных данных
						</p>
					)}
					<PrimaryButton type='submit' text='Отправить заявку' />
				</form>
			</div>
		</Modal>
	)
}

export const ConsultaionHeading = () => {
	return (
		<>
			<h3 className={cls.Modal_heading}>
				Поможем с выбором и рассчитаем стоимость
			</h3>
			<p className={cls.Modal_subheading}>
				Оставьте свои данные и наш менеджер поможет подобрать подходящий вариант
				под ваш запрос.
			</p>
		</>
	)
}
