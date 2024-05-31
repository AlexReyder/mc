'use client'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Character from './Character'
import cls from './ProductTextSection.module.scss'

const phrase =
	'Полимерный микроцемент «Симтер» – это инновационный материал, который обрел популярность в сфере строительства и дизайна благодаря своим уникальным свойствам и возможностям. Полимерный микроцемент «Симтер» применяется в различных областях, включая строительство, ремонт и архитектура. Он используется в строительстве зданий и сооружений, а также в ремонте и восстановлении бетонных конструкций, таких как стены, потолки, полы и другие поверхности. Полимерный микроцемент «Симтер» смело используется архитектурами и дизайнера для создания уникальных дизайнерских проектов отделки зданий и помещений.'

const ProductTextSection = () => {
	const words = phrase.split(' ')

	return (
		<Section id='product-text' className={cls.Section}>
			<Container>
				<Character paragraph={phrase} />
			</Container>
		</Section>
	)
}
export default ProductTextSection
