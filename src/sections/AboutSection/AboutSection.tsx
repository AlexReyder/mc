import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './AboutSection.module.scss'

interface AboutSectionProps {
	classContainer?: string
}

export const AboutSection = ({ classContainer }: AboutSectionProps) => {
	return (
		<Section id='about'>
			<Container className={classContainer}>
				<Headings title='О компании' />
				<article className={cls.Company}>
					<p className={cls.Description}>
						Наша компания уже долгое время существует на рынке строительных
						материалов г. Перми. Основными направлениями деятельности нашей
						компании являются производство и продажа тротуарной, фасадной
						плитки, бордюра в Перми в Перми и Пермском крае. Также осуществляем
						услуги по доставке изготавливаемой продукции.
					</p>
				</article>
			</Container>
		</Section>
	)
}
