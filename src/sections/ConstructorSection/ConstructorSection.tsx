'use client'
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

	function filterData(filter: string) {
		setConstructorStart(true)
		setCurrentFilter(filter)
		const filtredData = data.filter((el: ProductI) => el.type === filter)
		setCurrentData(filtredData)
	}

	return (
		<Section id='colors' className={cls.Section}>
			<Container className='design'>
				<Headings title='Палитра' className={cls.Heading} />

				{startConstructor ? (
					<div className={cls.FiltersWrapper}>
						<button
							className={`${cls.Filter} ${
								currentFilter === 'walls' ? cls.FilterActive : ''
							}`}
							onClick={() => filterData('walls')}
						>
							Стены
						</button>
						<button
							className={`${cls.Filter} ${
								currentFilter === 'floors' ? cls.FilterActive : ''
							}`}
							onClick={() => filterData('floors')}
						>
							Полы
						</button>
						<button
							className={`${cls.Filter} ${
								currentFilter === 'wet' ? cls.FilterActive : ''
							}`}
							onClick={() => filterData('wet')}
						>
							Мокрые зоны
						</button>
					</div>
				) : null}

				{/* {data.length > 0 ? <Constructor data={currentData} /> : null} */}
				{!startConstructor ? (
					<div className={cls.Choose}>
						<button className={cls.Card} onClick={() => filterData('walls')}>
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
						<button className={cls.Card} onClick={() => filterData('floors')}>
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
						<button className={cls.Card} onClick={() => filterData('wet')}>
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

							<p className={cls.Head}>Мокрые зоны</p>
						</button>
					</div>
				) : (
					<Constructor data={currentData} />
				)}
			</Container>
		</Section>
	)
}
export default ConstructorSection
