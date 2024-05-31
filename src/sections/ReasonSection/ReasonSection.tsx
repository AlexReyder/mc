'use client'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { useRef } from 'react'
import cls from './ReasonSection.module.scss'

const ReasonSection = () => {
	const container = useRef(null)

	return (
		<Section id='reasons' className={cls.Section}>
			<Container>
				<div className={cls.ReasonsContainer}>
					<Headings
						title='3 причины работать с нами'
						color='w'
						className={cls.Heading}
					/>
					{reasonsData.map((reason, i) => (
						<Reason reason={reason} key={`reasons${i}`} />
					))}
				</div>
			</Container>
		</Section>
	)
}
export default ReasonSection

const Reason = ({ reason }: any) => {
	return (
		<div key={reason.id} className={cls.ReasonWrapper}>
			<div className={cls.Reason}>
				<img src={reason.image} alt={reason.name} />
			</div>
		</div>
	)
}

const reasonsData = [
	{
		id: 1,
		name: '',
		image: '/img/reasons/manufacturer.jpg',
	},
	{
		id: 2,
		name: '',
		image: '/img/reasons/second.jpg',
	},
	{ id: 3, name: '', image: '/img/reasons/third.jpg' },
]
