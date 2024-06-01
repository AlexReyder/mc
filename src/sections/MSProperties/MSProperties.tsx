import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import Image from 'next/image'
import cls from './MSProperties.module.scss'

export default function MSProperties() {
	return (
		<Section id='properties'>
			<Headings title='Характеристики' className={cls.Heading} />
			<div className={cls.Wrapper}>
				<div className={`${cls.Item} ${cls.Item1}`} key={1}>
					<p className={cls.Title}>
						<span className={cls.Bold}>Пожаробезопасность КМ-0</span>
						<br />
						<span> (не поддерживает горение, не тлеет)</span>
					</p>
				</div>
				<div className={`${cls.Item} ${cls.Item2}`} key={2}>
					<Image
						src='/img/properties/1.png'
						alt='Применение микроцемента в интерьере'
						fill
						style={{ padding: '2rem' }}
					/>
				</div>
				<div className={`${cls.Item} ${cls.Item3}`} key={3}>
					<p className={cls.Title}>
						<span className={cls.Bold}>Паропроницаемость - 0.12</span>
						<span>мг/кв. м/ч/П</span>
					</p>
				</div>
				<div className={`${cls.Item} ${cls.Item4}`} key={4}>
					<Image
						src='/img/properties/2.png'
						alt='Применение микроцемента в интерьере'
						fill
						style={{ padding: '2rem' }}
					/>
				</div>
				<div className={`${cls.Item} ${cls.Item5}`} key={5}>
					<p className={cls.Title}>
						<span className={cls.Bold}>УФ-устойчивость – 8 баллов</span>
						<br />
						<span> (максимальный)</span>
					</p>
				</div>
				<div className={`${cls.Item} ${cls.Item6}`} key={6}>
					<p className={cls.Title}>
						<span className={cls.Bold}>
							Водопоглощение – 3% <br />
						</span>
						<span> (не боится влаги)</span>
					</p>
				</div>
				<div className={`${cls.Item} ${cls.Item7}`} key={7}>
					<Image
						src='/img/properties/3.png'
						alt='Применение микроцемента в интерьере'
						fill
						style={{ padding: '2rem' }}
					/>
				</div>
				<div className={`${cls.Item} ${cls.Item8}`} key={8}>
					<p className={cls.Title}>
						<span className={cls.Bold}>
							Толщина слоя при нанесении на поверхность
						</span>
						<span> – от</span>
						<span className={cls.Bold}> 2</span>
						<span> до</span>
						<span className={cls.Bold}> 3</span>
						<span>мм</span>
					</p>
				</div>
				<div className={`${cls.Item} ${cls.Item9}`} key={9}>
					<Image
						src='/img/properties/4.png'
						alt='Применение микроцемента в интерьере'
						fill
						style={{ padding: '2rem' }}
					/>
				</div>
				<div className={`${cls.Item} ${cls.Item10}`} key={10}>
					<p className={cls.Title}>
						<span className={cls.Bold}>
							Температура при работе с продуктом:
						</span>
						<span> от +8 С до +30°С</span>
					</p>
				</div>
				<div className={`${cls.Item} ${cls.Item11}`} key={11}>
					<p className={cls.Title}>
						<span className={cls.Bold}>Время высыхание продукта:</span>
						<span> 1 и 2 слой – от 2 до 5 часов каждый слой</span>
					</p>
				</div>
				<div className={`${cls.Item} ${cls.Item12}`} key={12}>
					<Image
						src='/img/properties/5.png'
						alt='Применение микроцемента в интерьере'
						fill
						style={{ padding: '2rem' }}
					/>
				</div>
				<div className={`${cls.Item} ${cls.Item13}`} key={13}>
					<p className={cls.Title}>
						<span className={cls.Bold}> Время готовности материала:</span>
						<span> полностью затвердевает через 24 часа</span>
					</p>
				</div>
				<div className={`${cls.Item} ${cls.Item14}`} key={14}>
					<Image
						src='/img/properties/6.png'
						alt='Применение микроцемента в интерьере'
						fill
						style={{ padding: '2rem' }}
					/>
				</div>
				<div className={`${cls.Item} ${cls.Item15}`} key={15}>
					<p className={cls.Title}>
						<span className={cls.Bold}>Cтрана производитель: Россия</span>
					</p>
				</div>
			</div>
		</Section>
	)
}
