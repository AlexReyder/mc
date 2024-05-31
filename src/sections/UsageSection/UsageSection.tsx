'use client'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import cls from './UsageSection.module.scss'

const UsageSection = () => {
	return (
		<Section id='usage' className={cls.Section}>
			<HorizontalScrollCarousel />
		</Section>
	)
}
export default UsageSection

const HorizontalScrollCarousel = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})

	const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])

	return (
		<section ref={targetRef} className={cls.Carousel}>
			<div className={cls.CarouselWrapper}>
				<Headings
					title='Область применения'
					color='w'
					className={cls.Heading}
				/>
				<motion.div style={{ x }} className={cls.Container}>
					{objectData.map(object => {
						return <Object object={object} key={object.id} />
					})}
				</motion.div>
			</div>
		</section>
	)
}

const Object = ({ object }: any) => {
	return (
		<div
			key={object.id}
			className={`${cls.Object} ${object.id === 1 ? cls.FirstObject : 'asd'}`}
		>
			<div className={cls.ObjectImageContainer}>
				<img src={object.image} alt={object.name} className={cls.ObjectImage} />
			</div>
			<div className={cls.ObjectInfoWrapper}>
				<h3 className={cls.ObjectTitle}>{object.name}</h3>
				<p
					className={cls.ObjectDescription}
					dangerouslySetInnerHTML={{ __html: object.description }}
				></p>
			</div>
		</div>
	)
}

const objectData: ObjectI[] = [
	{
		id: 1,
		name: 'Облицовка стен',
		description:
			'<strong>Полимерный микроцемент «Симтер»</strong> используется для облицовки стен, создавая прочный слой на поверхности и эстетичный вид.',
		image: '/img/usage/walls.jpg',
	},
	{
		id: 2,
		name: 'Полы',
		description:
			'<strong>Полимерный микроцемент «Симтер»</strong> рекомендуется использовать для создания прочных и долговечных полов как в жилых, так и в административных помещениях',
		image: '/img/usage/floor.jpg',
	},
	{
		id: 3,
		name: 'Потолки',
		description:
			'При использовании <strong>полимерного микроцемента «Симтер»</strong> на потолках создаётся гладкая и эстетичная поверхность.',
		image: '/img/usage/ceiling.jpeg',
	},
	{
		id: 4,
		name: 'Зоны ванных комнат и душевых',
		description:
			'Прочность и влагостойкость <strong>полимерного микроцемента «Симтер»</strong> позволяет использовать его в ванных, душевых и иных влажных зонах.',
		image: '/img/usage/bathroom.jpeg',
	},

	{
		id: 5,
		name: 'Предметы мебели и интерьера',
		description:
			'<strong>Полимерный микроцемент «Симтер»</strong> идеально используется для создания декоративных элементов и отделки поверхностей предметов мебели.',
		image: '/img/usage/furniture.jpg',
	},
]

interface ObjectI {
	id: number
	name: string
	description: string
	image: string
}
