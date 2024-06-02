'use client'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import cls from './ReasonSection.module.scss'

const ReasonSection = () => {
	return (
		<section id='reasons' className={cls.ReasonsContainer}>
			<Headings
				title='3 причины работать с нами'
				color='w'
				className={cls.Heading}
			/>
			<div key={1} className={cls.ReasonWrapper}>
				<div className={cls.Reason}>
					<img src={reasonsData[0].image} alt={reasonsData[0].name} />
				</div>
			</div>
			<div key={2} className={cls.ReasonWrapper}>
				<div className={cls.Reason}>
					<img src={reasonsData[1].image} alt={reasonsData[1].name} />
				</div>
			</div>
			<div key={3} className={cls.ReasonWrapper}>
				<div className={cls.Reason}>
					<img src={reasonsData[2].image} alt={reasonsData[2].name} />
				</div>
			</div>
		</section>
	)
}
export default ReasonSection

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

// const ReasonSection = () => {
// 	const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end']
//   })

// 	return (
// 		<section id='reasons' className={cls.Section} ref={container}>
// 			<Container>
// 				<div className={cls.ReasonsContainer}>
// 					<Headings
// 						title='3 причины работать с нами'
// 						color='w'
// 						className={cls.Heading}
// 					/>
// 					{reasonsData.map((reason, i) => (
// 						<Reason reason={reason} key={`reasons${i}`} />
// 					))}
// 				</div>
// 			</Container>
// 		</section>
// 	)
// }
// export default ReasonSection

// const Reason = ({ reason }: any) => {
// 	return (
// 		<div key={reason.id} className={cls.ReasonWrapper}>
// 			<div className={cls.Reason}>
// 				<img src={reason.image} alt={reason.name} />
// 			</div>
// 		</div>
// 	)
// }

// const reasonsData = [
// 	{
// 		id: 1,
// 		name: '',
// 		image: '/img/reasons/manufacturer.jpg',
// 	},
// 	{
// 		id: 2,
// 		name: '',
// 		image: '/img/reasons/second.jpg',
// 	},
// 	{ id: 3, name: '', image: '/img/reasons/third.jpg' },
// ]
