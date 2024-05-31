'use client'
import { DefaultButton } from '@/shared/ui/Buttons/DefaultButton/DefaultButton'
import { ModalInput } from '@/shared/ui/Inputs/ModalInput/ModalInput'
import { Modal } from '@/shared/ui/Modal'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import PhoneInput from 'react-phone-input-2'
import cls from './ConsultationModal.module.scss'
export enum ConsultationDataTypes {
	CONSULTATION = 'Консультация',
	VIDEOCALL = 'Видеоконсультация',
	ORDERCALL = 'Заказать звонок',
	DESIGN = 'Проектирование домов',
	BUILDING_WORKS = 'Строительно-монтажные работы',
	ELECTRO_WORKS = 'Электромонтажные работы',
	VENTILATION = 'Монтаж систем вентиляции',
	DISMANTLING_WORKS = 'Демонтажные работы',
	FINISHING_WORKS = 'Отделочные работы',
}

interface ConsultationModalProps {
	heading: string
	isOpen: boolean
	handleClose: () => void
	data?: any
}

export const ConsultationModal = ({
	heading,
	isOpen,
	data,
	handleClose,
}: ConsultationModalProps) => {
	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			username: '',
			phone: '',
			theme: data,
		},
	})
	const [isSend, setIsSend] = useState('Отправить заявку')
	const router = useRouter()

	const onSubmit = (data: any) => {
		// const output = {
		// 	...data,
		// }
		axios
			.post(`${process.env.domainUrl}/api/mail`, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				reset()
				setIsSend('Отправлено')
			})
	}

	return (
		<Modal type='Consult' isOpen={isOpen} onClose={handleClose}>
			<div className={cls.Wrapper}>
				<div className={cls.Left}>
					<ConsultaionHeading heading={heading} subheading={'subheading'} />
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className={cls.Right}>
					<Controller
						name='username'
						control={control}
						render={({ field }) => (
							<ModalInput placeholder='Ваше имя' required {...field} />
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

					<DefaultButton type='submit' className={cls.Submit}>
						{isSend}
					</DefaultButton>
				</form>
			</div>
		</Modal>
	)
}

interface ConsultaionHeadingProps {
	heading: string | ReactNode
	subheading: string | ReactNode
}

export const ConsultaionHeading = ({
	heading,
	subheading,
}: ConsultaionHeadingProps) => {
	const subheadingText = (
		<>
			Оставьте номер телефона.
			<br /> Наш менеджер перезвонит и подробно ответит на Ваши вопросы.
		</>
	)
	return (
		<>
			<h3 className={cls.Modal_heading}>{heading}</h3>
			<p className={cls.Modal_subheading}>{subheadingText}</p>
		</>
	)
}
