import { Container } from '@/shared/ui/Layout/Container/Container'
import Image from 'next/image'
import Link from 'next/link'
import cls from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={cls.Footer}>
			<Container className={cls.Wrapper}>
				<div className={`${cls.Contacts__entity} ${cls.Entity_1}`}>
					<p className={cls.Title}>Электронная почта</p>
					<a href='mailto:info@simter.ru' className={`${cls.Email} link`}>
						info@simter.ru
					</a>
				</div>
				<div className={`${cls.Contacts__entity} ${cls.Entity_2}`}>
					<p className={cls.Title}>Номер телефона</p>
					<a href='tel:+78005003346' className={`${cls.Email} link`}>
						+7 800 500 33 46
					</a>
				</div>
				<div className={`${cls.Contacts__entity} ${cls.Entity_3}`}>
					<p className={cls.Title}>Мессенджеры</p>
					<a
						href='https://wa.me/79950322214?text='
						className={`${cls.Messanger} link`}
					>
						Whatsapp
					</a>
					<a href='https://t.me/simter_rf' className={`${cls.Messanger} link`}>
						Telegram
					</a>
				</div>
				<div className={`${cls.Contacts__entity} ${cls.Entity_4}`}>
					<p className={cls.Title}>Офис в Москве</p>
					<p className={`${cls.Address}`}>ул. Ткацкая, д. 5, стр. 16</p>
				</div>
				<div className={`${cls.Contacts__entity} ${cls.Entity_5}`}>
					<p className={cls.Title}>Офис в Волгограде</p>
					<p className={`${cls.Address}`}>
						Волгоград, пр. В. И. Ленина, д. 98, оф. 318
					</p>
				</div>
				<div className={`${cls.Contacts__entity} ${cls.Entity_6}`}>
					<p className={cls.Title}>Реквизиты</p>
					<p className={cls.Business}>ООО «СИМТЕР»</p>
					<p className={cls.Business}>ИНН 5040172862</p>
					<p className={cls.Business}>ИП Перепелова В. А.</p>
					<p className={cls.Business}>ИНН 301302986767</p>
				</div>
			</Container>
			<p className={cls.Copyright}>2024 © ООО «СИМТЕР»</p>
			<Link href='#' className={cls.Top}>
				<Image
					src='img/icons/top.svg'
					alt='Подняться наверх'
					width={19}
					height={28}
				/>
			</Link>
		</footer>
	)
}
