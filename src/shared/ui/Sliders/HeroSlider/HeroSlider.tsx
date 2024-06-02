import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import cls from './HeroSlider.module.scss'

export const HeroSlider = () => {
	return (
		<Swiper
			className={cls.Sw}
			slidesPerView={1}
			touchRatio={1}
			// allowTouchMove={false}
			effect={'creative'}
			creativeEffect={{
				prev: {
					shadow: true,
					translate: ['-20%', 0, -1],
				},
				next: {
					translate: ['100%', 0, 0],
				},
			}}
			modules={[EffectCreative, Autoplay]}
			autoplay={{
				delay: 5000,
			}}
		>
			<SwiperSlide className={cls.Slide}>
				<Image
					src='/img/hero/1.jpg'
					fill
					alt='Полимерный микроцемент'
					style={{ objectFit: 'cover' }}
				/>
			</SwiperSlide>
			<SwiperSlide className={cls.Slide}>
				<Image
					src='/img/hero/2.jpg'
					fill
					alt='Полимерный микроцемент'
					style={{ objectFit: 'cover' }}
				/>
			</SwiperSlide>
			<SwiperSlide className={cls.Slide}>
				<Image
					src='/img/hero/3.jpg'
					fill
					alt='Полимерный микроцемент'
					style={{ objectFit: 'cover' }}
				/>
			</SwiperSlide>
			<SwiperSlide className={cls.Slide}>
				<Image
					src='/img/hero/4.jpg'
					fill
					alt='Полимерный микроцемент'
					style={{ objectFit: 'cover' }}
				/>
			</SwiperSlide>
			<SwiperSlide className={cls.Slide}>
				<Image
					src='/img/hero/5.jpg'
					fill
					alt='Полимерный микроцемент'
					style={{ objectFit: 'cover' }}
				/>
			</SwiperSlide>
			<SwiperSlide className={cls.Slide}>
				<Image
					src='/img/hero/6.jpg'
					fill
					alt='Полимерный микроцемент'
					style={{ objectFit: 'cover' }}
				/>
			</SwiperSlide>
		</Swiper>
	)
}
