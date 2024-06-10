'use client'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import 'photoswipe/dist/photoswipe.css'
import { useRef } from 'react'
import { Gallery, Item } from 'react-photoswipe-gallery'
import cls from './GallerySection.module.scss'

const GallerySection = () => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
	})
	const { scrollY } = useScroll()

	const x = useTransform(scrollYProgress, [-1, 1], ['95%', '-60%'])

	// const xTop = useTransform(scrollYProgress, [-1, 1], ['95%', '-95%'])
	// const xCenter = useTransform(scrollYProgress, [1, -1], ['20%', '-95%'])
	// const xBottom = useTransform(scrollYProgress, [-1, 1], ['95%', '-95%'])
	return (
		<section id='gallery' className={cls.Gallery}>
			<Headings title='Удачные решения' className={cls.Heading} />
			<Gallery>
				<div className={cls.Container}>
					<motion.div
						initial={{ x: '-300px' }}
						style={{ x }}
						className={cls.Row}
						id='gallery-top'
						ref={targetRef}
					>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/top/1.jpg'
								thumbnail='/img/gallery/top/1.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/top/1.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/top/2.jpg'
								thumbnail='/img/gallery/top/3.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/top/2.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/top/3.jpg'
								thumbnail='/img/gallery/top/3.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/top/3.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/top/4.jpg'
								thumbnail='/img/gallery/top/4.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/top/4.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/top/5.jpg'
								thumbnail='/img/gallery/top/5.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/top/5.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/top/6.jpg'
								thumbnail='/img/gallery/top/6.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/top/6.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: '-300px' }}
						style={{ x }}
						className={cls.Row}
						id='gallery-top'
					>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/center/1.jpg'
								thumbnail='/img/gallery/center/1.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/center/1.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/center/2.jpg'
								thumbnail='/img/gallery/center/3.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/center/2.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/center/3.jpg'
								thumbnail='/img/gallery/center/3.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/center/3.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/center/4.jpg'
								thumbnail='/img/gallery/center/4.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/center/4.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/center/5.jpg'
								thumbnail='/img/gallery/center/5.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/center/5.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/center/6.jpg'
								thumbnail='/img/gallery/center/6.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/center/6.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
					</motion.div>
					<motion.div
						initial={{ x: '-300px' }}
						style={{ x }}
						className={cls.Row}
						id='gallery-top'
					>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/bottom/1.jpg'
								thumbnail='/img/gallery/bottom/1.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/bottom/1.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/bottom/2.jpg'
								thumbnail='/img/gallery/bottom/3.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/bottom/2.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/bottom/3.jpg'
								thumbnail='/img/gallery/bottom/3.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/bottom/3.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/bottom/4.jpg'
								thumbnail='/img/gallery/bottom/4.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/bottom/4.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/bottom/5.jpg'
								thumbnail='/img/gallery/bottom/5.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/bottom/5.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
						<div className={cls.ImageWrapper}>
							<Item
								original='/img/gallery/bottom/6.jpg'
								thumbnail='/img/gallery/bottom/6.jpg'
								width={1080}
								height={720}
								alt='Удачное применение микроцемента'
							>
								{({ ref, open }) => (
									<Image
										style={{ cursor: 'pointer' }}
										src='/img/gallery/bottom/6.jpg'
										ref={ref}
										onClick={open}
										alt='Удачное применение микроцемента'
										fill
									/>
								)}
							</Item>
						</div>
					</motion.div>
				</div>
			</Gallery>
		</section>
	)
}
export default GallerySection
