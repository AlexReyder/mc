'use client'
import { ConsultationModal } from '@/features/ConsultationModal'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { HeroSlider } from '@/shared/ui/Sliders/HeroSlider/HeroSlider'
import { useState } from 'react'
import cls from './HeroSection.module.scss'

export const HeroSection = () => {
	const [isModalConsultOpen, setModalConsultOpen] = useState(false)
	const handleModalClose = () => {
		setModalConsultOpen(false)
	}
	return (
		<Section id='#hero' className={cls.Hero}>
			<div className={cls.Touch}>
				<h2 className={cls.Heading}>
					Полимерный микроцемент идеальный материал для отделки и дизайна
				</h2>
				<PrimaryButton
					text='Получить консультацию'
					onClick={() => setModalConsultOpen(true)}
				/>
			</div>
			<HeroSlider />
			<ConsultationModal
				data='Консультация'
				heading='Консультация'
				isOpen={isModalConsultOpen}
				handleClose={handleModalClose}
			/>
			<div className={`swiper-pagination ${cls.Pagination}`}></div>
		</Section>
	)
}
