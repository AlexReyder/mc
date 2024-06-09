'use client'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { LinkDefault } from '@/shared/ui/Link/Link/LinkDefault'
import { HeroSlider } from '@/shared/ui/Sliders/HeroSlider/HeroSlider'
import Link from 'next/link'
import cls from './ThankSection.module.scss'

interface ThankSectionI {
	heading?: string
	titleLink?: string
	link?: string
	download?: boolean
}

const ThankSection = ({
	heading = '',
	titleLink = 'Вернуться на главную',
	link = '/',
	download = false,
}: ThankSectionI) => {
	return (
		<Section id='#hero' className={cls.Hero}>
			<div className={cls.Touch}>
				{heading === '' ? (
					<>
						<h1 className={cls.Heading}>Спасибо за вашу заявку!</h1>
						<h2 className={cls.Subheading}>
							Ваша заявка принята!
							<br />В ближайшее время наш менеджер свяжется с Вами для уточнения
							заказа
						</h2>
					</>
				) : (
					<h1 className={cls.Heading} style={{ marginBottom: '2rem' }}>
						<span>404</span>
						<br />
						<span>Страница не найдена.</span>
					</h1>
				)}
				<div className={cls.ButtonContainer}>
					{download ? (
						<>
							<Link
								className={cls.PrimaryButton}
								href={link}
								target='_blank'
								download={true}
								style={{ display: 'inline-flex', marginBottom: '2rem' }}
							>
								{titleLink}
							</Link>
							<LinkDefault
								className={cls.PrimaryButton}
								text='Вернуться на главную'
								to='/'
							/>
						</>
					) : (
						<LinkDefault
							className={cls.PrimaryButton}
							text={titleLink}
							to={link}
						/>
					)}
				</div>
			</div>
			<HeroSlider />
		</Section>
	)
}
export default ThankSection
