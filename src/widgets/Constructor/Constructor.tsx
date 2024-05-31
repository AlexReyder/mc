import 'photoswipe/dist/photoswipe.css'
import { useEffect, useState } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import cls from './Constructor.module.scss'

interface ConstructorProps {
	data: ProductI[]
}

const Constructor = ({ data }: ConstructorProps) => {
	useEffect(() => {
		setCurrentObject(0)
	}, [data])
	const [currentObject, setCurrentObject] = useState<number>(0)
	const [shrink, setShrink] = useState<boolean>(false)
	function handleShowObject(i: number) {
		setCurrentObject(i)
	}
	return (
		<figure>
			{currentObject > data.length - 1 ? null : (
				<div className={cls.DesignMain}>
					<div
						className={`design__houses ${
							!shrink ? 'design__houses--increase' : ''
						}`}
					>
						<button
							className='design__shrink'
							onClick={() => setShrink(!shrink)}
						>
							<img
								src='/img/constructor/shrink.png'
								alt=''
								className='design__shrink-icon design__shrink-icon--rotate'
							/>
						</button>

						<img
							src={data[currentObject].object[1]}
							alt=''
							className='design__house-img'
						/>
					</div>
					<div
						className={`design__aside  ${
							!shrink ? 'design__aside--shrink' : ''
						}`}
					>
						<p className='design__title'>{data[currentObject].name}</p>
						<div className='design__variants'>
							<div className='design__variant-wrapper variants-visible'>
								<Gallery>
									<Item
										original={data[currentObject].palette[0]}
										thumbnail={data[currentObject].palette[1]}
										width='1000'
										height='800'
										alt='Палитра микроцемента'
									>
										{({ ref, open }) => (
											<img
												src={data[currentObject].palette[1]}
												alt='Вариант палитры микроцемента'
												className='design__variant'
												ref={ref}
												onClick={open}
											/>
										)}
									</Item>
								</Gallery>
							</div>
						</div>
					</div>
					<div className='design__panel design__panel--shrink'>
						<h2 className='section-heading'>
							<span>Выбери </span>
							<span className='section-heading section-heading--gold'>
								свое сочетание
							</span>
						</h2>
						<div className='wrapper'>
							{data.map((item, i) => (
								<div key={`miniature_${i}`}>
									<img
										src={data[i].minuature[1]}
										alt=''
										className={`design__palette ${
											i === currentObject ? 'design__palette--active' : ''
										}`}
										onClick={() => handleShowObject(i)}
									/>
									<p className='design__name'>{item.name}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</figure>
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
