import { Section } from '@/shared/ui/Layout/Section/Section'

import { Container } from '@/shared/ui/Layout/Container/Container'
import { LinkDefault } from '@/shared/ui/Link/Link/LinkDefault'
import cls from './NotFoundSection.module.scss'

export const NotFoundSection = () => {
	return (
		<Section id='#noutfound' className={cls.NotFound}>
			<Container className={cls.Container}>
				<h2>Ошибка 404</h2>
				<p>Страница не найдена.</p>

				<LinkDefault to='/' text='Вернуться на главную' />
			</Container>
		</Section>
	)
}
