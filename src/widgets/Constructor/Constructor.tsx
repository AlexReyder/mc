import axios from 'axios'
import 'photoswipe/dist/photoswipe.css'
import { useEffect, useRef, useState } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import cls from './Constructor.module.scss'

interface ConstructorProps {
	startFilter: string
}

const Constructor = ({ startFilter }: ConstructorProps) => {
	useEffect(() => {
		axios
			.get('/api/admin/getProducts')
			.then((res: any) => {
				setData(res.data)
				const filtredData = res.data.filter(
					(el: ProductI) => el.type === startFilter
				)
				setFiltredData(filtredData)
				setCurrentFilter(startFilter)
			})
			.finally(() => {
				setCurrentObject(0)
				if (refContainer.current) {
					refContainer.current.scrollIntoView({ behavior: 'smooth' })
				}
			})
	}, [])

	const [data, setData] = useState<ProductI[]>([])
	const [filtredData, setFiltredData] = useState<ProductI[]>([])
	const [currentObject, setCurrentObject] = useState<number>(0)
	const [currentFilter, setCurrentFilter] = useState<string>('')

	const refContainer = useRef(null)

	function filterData(filter: string) {
		setCurrentFilter(filter)
		const filtredData = data.filter((el: ProductI) => el.type === filter)
		setFiltredData(filtredData)
		setCurrentObject(0)
	}

	function handleShowObject(i: number) {
		setCurrentObject(i)
		if (refContainer.current) {
			refContainer.current.scrollIntoView({ behavior: 'smooth' })
		}
	}
	return (
		<figure ref={refContainer} className={cls.Constructor}>
			{filtredData.length > 0 ? (
				<div className={cls.DesignMain}>
					<div className={cls.FiltersWrapperPhone}>
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
					<div className={cls.DesignObject}>
						<img
							src={filtredData[currentObject].object[1]}
							alt=''
							className={cls.DesignObjectImage}
						/>
					</div>
					<div className={cls.DesignAside}>
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

						<div className={cls.DisignAsideWrapper}>
							<p className={cls.DesignTitle}>
								{filtredData[currentObject].name}
							</p>

							<div className='design__variant-wrapper variants-visible'>
								<Gallery>
									<Item
										original={filtredData[currentObject].palette[0]}
										thumbnail={filtredData[currentObject].palette[1]}
										width='1000'
										height='800'
										alt='Палитра микроцемента'
									>
										{({ ref, open }) => (
											<img
												src={filtredData[currentObject].palette[1]}
												alt='Вариант палитры микроцемента'
												className={cls.DesignVariant}
												ref={ref}
												onClick={open}
											/>
										)}
									</Item>
								</Gallery>
							</div>
						</div>
					</div>
					<div className={cls.DesignPanel}>
						<h2 className={cls.PanelHeading}>
							<span>Выбери </span>
							<span className='section-heading section-heading--gold'>
								свое сочетание
							</span>
						</h2>
						<div className={cls.DesignPanelWrapper}>
							{filtredData.map((item, i) => (
								<div key={`miniature_${i}`}>
									<img
										src={item.minuature[1]}
										alt=''
										className={`${cls.DesignPallete} ${
											i === currentObject ? cls.DesignActive : ''
										}`}
										onClick={() => handleShowObject(i)}
									/>
									<p className={cls.DesignName}>{item.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			) : (
				<p>Нет информации</p>
			)}
		</figure>
		// currentObject > data.length - 1 ?
	)
}
export default Constructor

export interface ProductI {
	id: string
	name: string
	type: string
	object: string[]
	palette: string[]
	minuature: string[]
}
