'use client'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Constructor, { ProductI } from '@/widgets/Constructor/Constructor'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './ConstructorSection.scss'
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

	function filterData(filter: string) {
		const filtredData = data.filter((el: ProductI) => el.type === filter)
		setCurrentData(filtredData)
	}

	return (
		<Section id='colors'>
			<Container className='design'>
				<button className='button-test' onClick={() => filterData('walls')}>
					Стены
				</button>
				<button className='button-test' onClick={() => filterData('floors')}>
					Полы
				</button>
				{data.length > 0 ? <Constructor data={currentData} /> : null}

				<div className='design__cta'>
					<a href='#visual' className='btn_expand'>
						<span>Другие цвета</span>
						<br />
						<span>Заказать 3D визуализацию дома</span>
					</a>
				</div>
			</Container>
		</Section>
	)
}
export default ConstructorSection
