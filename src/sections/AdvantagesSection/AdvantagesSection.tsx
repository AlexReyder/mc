'use client'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { InView } from 'react-intersection-observer'
import cls from './AdvantagesSection.module.scss'

export const AdvantagesSection = () => {
	return (
		<Section id='advantages' className={cls.Section}>
			<Container className={cls.Container}>
				<Headings title='Свойства микроцемента' color='w' />
				<ul className={cls.List}>
					<InView threshold={0.5} triggerOnce={true}>
						{({ inView, ref, entry }) => (
							<li ref={ref} className={`${cls.Item} ${inView ? cls.Ani : ''}`}>
								<span className={cls.Number}>(01)</span>
								<h3 className={cls.Title}>Универсальность</h3>
								<p className={cls.Description}>
									Учитывая свойства
									<strong> полимерного микроцемента «Симтер»</strong> область
									применения данного инновационного продукта многогранна: стены,
									полы и потолки в офисных и административных помещениях,
									проходные зоны, в том числе с повышенной нагрузкой, жилые
									пространства, «мокрые зоны», предметы мебели и декора. Наш
									продукт превращает любое пространство в изысканную и
									минималистичную обстановку.
								</p>
							</li>
						)}
					</InView>
					<InView threshold={0.5} triggerOnce={true}>
						{({ inView, ref, entry }) => (
							<li className={`${cls.Item} ${inView ? cls.Ani : ''}`} ref={ref}>
								<span className={cls.Number}>(02)</span>
								<h3 className={cls.Title}>Долговечность</h3>
								<p className={cls.Description}>
									<strong>Полимерный микроцемент «Симтер»</strong> обладает
									долговечностью, не подвергается коррозии и не разрушается под
									воздействием влаги. Высокая устойчивость к механическим
									нагрузкам делает его идеальным материалом для создания
									поверхностей, которые прослужат долгое время.
								</p>
							</li>
						)}
					</InView>
					<InView threshold={0.5} triggerOnce={true}>
						{({ inView, ref, entry }) => (
							<li className={`${cls.Item} ${inView ? cls.Ani : ''}`} ref={ref}>
								<span className={cls.Number}>(03)</span>
								<h3 className={cls.Title}>Практичность</h3>
								<p className={cls.Description}>
									<strong>Полимерный микроцемент «Симтер»</strong> имеет высокую
									прочность, выдерживает большие нагрузки и не боится влаги. Эти
									свойства делает его идеальным материалом для отделки помещений
									с высокой проходимостью, таких как кухни, ванные комнаты и
									коридоры, холлы и коридоры административных помещений, что
									делает его идеальным материалом для использования в интерьере,
									где могут возникать значительные нагрузки.
								</p>
							</li>
						)}
					</InView>
					<InView threshold={0.5} triggerOnce={true}>
						{({ inView, ref, entry }) => (
							<li className={`${cls.Item} ${inView ? cls.Ani : ''}`} ref={ref}>
								<span className={cls.Number}>(04)</span>
								<h3 className={cls.Title}>Экологичность</h3>
								<p className={cls.Description}>
									<strong>Полимерный микроцемент «Симтер»</strong> экологически
									чистый материал. Он не содержит химических присадок.
									Изготавливается из безопасных для здоровья материалов и не
									выделяет вредных веществ. Процесс производства микроцемента
									обычно более экологичен, чем производство традиционных
									бетонных материалов.
								</p>
							</li>
						)}
					</InView>
					<InView threshold={0.5} triggerOnce={true}>
						{({ inView, ref, entry }) => (
							<li className={`${cls.Item} ${inView ? cls.Ani : ''}`} ref={ref}>
								<span className={cls.Number}>(05)</span>
								<h3 className={cls.Title}>Экономичность</h3>
								<p className={cls.Description}>
									<strong>Полимерный микроцемент «Симтер»</strong> обновляет
									любую поверхность. Нанесение микроцемента осуществляется без
									необходимости удаления существующей поверхности. Слой
									микроцемента толщиной до 3 мм можно наносить сверху, не
									опасаясь его отслаивания. Наш продукт - лучший союзник для
									создания новой поверхности с высокой декоративной ценностью и
									наименьшими затратами.
								</p>
							</li>
						)}
					</InView>
					<InView threshold={0.5} triggerOnce={true}>
						{({ inView, ref, entry }) => (
							<li className={`${cls.Item} ${inView ? cls.Ani : ''}`} ref={ref}>
								<span className={cls.Number}>(06)</span>
								<h3 className={cls.Title}>
									Неограниченная
									<br />
									эстетика
								</h3>
								<p className={cls.Description}>
									При использовании
									<strong> Полимерного микроцемента «Симтер»</strong> умножаются
									эстетические возможности благодаря разнообразию предлагаемых
									эффектов и декоративной отделки. Большая палитра цветов и
									множество способов формирования текстур гарантирует красоту и
									современность.
								</p>
							</li>
						)}
					</InView>
				</ul>
			</Container>
		</Section>
	)
}
