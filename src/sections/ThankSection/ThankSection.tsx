'use client'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { LinkDefault } from '@/shared/ui/Link/Link/LinkDefault'
import { HeroSlider } from '@/shared/ui/Sliders/HeroSlider/HeroSlider'
import cls from './ThankSection.module.scss'

interface ThankSectionI {
	titleLink?: string
	link?: string
	download?: boolean
}

const ThankSection = ({
	titleLink = 'Вернуться на главную',
	link = '/',
	download,
}: ThankSectionI) => {
	return (
		<Section id='#hero' className={cls.Hero}>
			<div className={cls.Touch}>
				<h1 className={cls.Heading}>Спасибо за вашу заявку!</h1>
				<h2 className={cls.Subheading}>
					Ваша заявка принята!
					<br />В ближайшее время наш менеджер свяжется с Вами для уточнения
					заказа
				</h2>
				<LinkDefault className={cls.PrimaryButton} text={titleLink} to={link} />
			</div>
			<HeroSlider />
		</Section>
	)
}
export default ThankSection
