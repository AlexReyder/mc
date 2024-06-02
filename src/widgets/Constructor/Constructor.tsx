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
	function handleShowObject(i: number) {
		setCurrentObject(i)
	}
	return (
		<figure>
			{currentObject > data.length - 1 ? null : (
				<div className={cls.DesignMain}>
					<div className={cls.DesignObject}>
						<img
							src={data[currentObject].object[1]}
							alt=''
							className={cls.DesignObjectImage}
						/>
					</div>
					<div className={cls.DesignAside}>
						<p className={cls.DesignTitle}>{data[currentObject].name}</p>
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
							{data.map((item, i) => (
								<div key={`miniature_${i}`}>
									<img
										src={data[i].minuature[1]}
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
