'use client'
import 'photoswipe/dist/photoswipe.css'
import { useCallback, useRef, useState } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'
import { Navigation } from '../ArrowSlider/ArrowSlider'
import cls from './ProjectGallerySlider.module.scss'
interface ProjectGallerySliderProps {
	controlClass?: string
	SwiperClass?: string
	SlideClass?: string
	data: string[]
	prevNameNavigation: string | string[]
	nextNameNavigation: string | string[]
	config?: any
	width?: string
	height?: string
	src?: string[]
	coverflow?: boolean
}

export const ProjectGallerySlider = ({
	controlClass,
	SwiperClass,
	SlideClass,
	config,
	data,
	prevNameNavigation,
	nextNameNavigation,
	width = '1920',
	height = '1080',
	coverflow = false,
}: ProjectGallerySliderProps) => {
	const [currentSlide, setCurrentSlide] = useState(1)
	const [slidesLength, setslidesLength] = useState(0)

	const sliderRef = useRef<SwiperRef>(null)

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slideNext()
	}, [])

	return (
		<>
			<Gallery>
				<div className={cls.Border}></div>
				<Navigation
					controlClass={controlClass}
					prevName={prevNameNavigation}
					nextName={nextNameNavigation}
					currentSlide={currentSlide - 1}
					slidesLength={slidesLength - 1}
					handlePrev={handlePrev}
					handleNext={handleNext}
				/>

				<Swiper
					ref={sliderRef}
					slidesPerView={2}
					onSwiper={swiper => setslidesLength(swiper.slides.length)}
					onSlideChange={swiper => setCurrentSlide(swiper.activeIndex + 1)}
					className={cls.Wrapp}
					// effect='coverflow'
					modules={[EffectCoverflow]}
					{...config}
				>
					{data.map((src, i) => {
						return (
							<SwiperSlide
								className={`${cls.Slide} ${SlideClass ? SlideClass : null}`}
								key={`asd34dsfdsf${i}`}
							>
								<Item
									original={src}
									thumbnail={src}
									width={width}
									height={height}
									alt='Photo of seashore by Folkert Gorter'
								>
									{({ ref, open }) => (
										<img
											style={{ cursor: 'pointer' }}
											src={src}
											ref={ref}
											onClick={open}
											className={cls.Image}
										/>
									)}
								</Item>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</Gallery>
		</>
	)
}
