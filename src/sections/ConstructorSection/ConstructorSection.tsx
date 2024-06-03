'use client'
import { ConsultationModal } from '@/features/ConsultationModal'
import { PrimaryButton } from '@/shared/ui/Buttons/PrimaryButton/PrimaryButton'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Constructor, { ProductI } from '@/widgets/Constructor/Constructor'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import cls from './ConstructorSection.module.scss'
const ConstructorSection = () => {
	useEffect(() => {
		axios.get('/api/admin/getProducts').then(res => {
			setData(res.data)
			setCurrentData(res.data)
			console.log(res.data)
		})
	}, [])
	const [data, setData] = useState<ProductI[]>([])
	const [currentData, setCurrentData] = useState<ProductI[]>([])
	const [startConstructor, setConstructorStart] = useState(false)
	const [currentFilter, setCurrentFilter] = useState<string>('')
	const [openModal, setOpenModal] = useState<boolean>(false)

	function handleStartConstructor(filter: string) {
		setCurrentFilter(filter)
		setConstructorStart(true)
	}

	function handleModalOpen() {
		setOpenModal(true)
	}
	function handleModalClose() {
		setOpenModal(false)
	}

	return (
		<Section id='colors' className={cls.Section}>
			<Container className={cls.Container}>
				<Headings title='Палитра' className={cls.Heading} />

				{!startConstructor ? (
					<div className={cls.Choose}>
						<button
							className={cls.Card}
							onClick={() => handleStartConstructor('walls')}
						>
							<div className={cls.CardWrapper}>
								<div className={cls.Overlay}></div>
								<Image
									src='/img/constructor/wall.jpg'
									alt='Стены'
									fill
									style={{ objectFit: 'cover' }}
								/>
								<h3 className={cls.Title}>Открыть</h3>
							</div>

							<p className={cls.Head}>Стены</p>
						</button>
						<button
							className={cls.Card}
							onClick={() => handleStartConstructor('floors')}
						>
							<div className={cls.CardWrapper}>
								<div className={cls.Overlay}></div>
								<Image
									src='/img/constructor/floor.jpg'
									alt='Полы'
									fill
									style={{ objectFit: 'cover' }}
								/>
								<h3 className={cls.Title}>Открыть</h3>
							</div>

							<p className={cls.Head}>Полы</p>
						</button>
						<button
							className={cls.Card}
							onClick={() => handleStartConstructor('wet')}
						>
							<div className={cls.CardWrapper}>
								<div className={cls.Overlay}></div>
								<Image
									src='/img/constructor/wet.jpg'
									alt='Стены'
									fill
									style={{ objectFit: 'cover' }}
								/>
								<h3 className={cls.Title}>Открыть</h3>
							</div>

							<p className={cls.Head}>Мокрые зоны</p>
						</button>
					</div>
				) : (
					<Constructor startFilter={currentFilter} />
				)}
				<div className={cls.SubmitContainer}>
					<PrimaryButton
						text='Оставить заявку'
						theme='Dark'
						className={cls.Submit}
						onClick={handleModalOpen}
					/>
				</div>
			</Container>
			<ConsultationModal isOpen={openModal} handleClose={handleModalClose} />
		</Section>
	)
}
export default ConstructorSection
