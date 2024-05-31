'use client'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import cls from './MapSection.module.scss'

import { Container } from '@/shared/ui/Layout/Container/Container'

export const MapSection = () => {
	return (
		<Section id='map'>
			<Container className={cls.Map}>
				<Headings title='Мы на карте' />
				<iframe
					src='https://yandex.ru/map-widget/v1/?um=constructor%3Ab7267b91a189bacb8d69466c63ba19063a58cdd6b04439443012e7a55667fc4b&amp;source=constructor'
					width='100%'
					height='400'
					frameBorder='0'
				></iframe>
			</Container>
		</Section>
	)
}
