'use client'
import { Logo } from '@/shared/ui/Icons/Logo/Logo'
import { MailIcon } from '@/shared/ui/Icons/MailIcon/MailIcon'
import { PhoneIcon } from '@/shared/ui/Icons/PhoneIcon/PhoneIcon'
import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'
import { MessangerLink } from '@/shared/ui/Link/MessangerLink/MessangerLink'
import { Menu } from '@/widgets/Menu'
import Link from 'next/link'
import cls from './Header.module.scss'

export const Header = () => {
	return (
		<header className={cls.Header}>
			<Link href='/' className={cls.LogoBox}>
				<Logo />
			</Link>

			<nav className={cls.Nav}>
				<ul className={cls.Nav__list}>
					<li className={cls.Nav__item}>
						<a href='/#usage'>Область применения</a>
					</li>
					<li className={cls.Nav__item}>
						<a href='/#advantages'>Свойства</a>
					</li>
					<li className={cls.Nav__item}>
						<a href='/#colors'>Палитра</a>
					</li>
					<li className={cls.Nav__item}>
						<a href='/#properties'>Характеристики</a>
					</li>
					<li className={cls.Nav__item}>
						<a href='/#contacts'>Контакты</a>
					</li>
				</ul>
			</nav>
			<div className={cls.Communicate}>
				<div className={cls.Social}>
					<MessangerLink
						icon={<WhatsAppIcon className={cls.Icon} />}
						to='https://wa.me/79950322214?text='
					/>
					<MessangerLink
						icon={<TelegramIcon className={cls.Icon} />}
						to='https://t.me/simter_rf'
					/>
					<p className={cls.More}>(Звоните и пишите)</p>
				</div>
				<div className={cls.Contact}>
					<a href='tel:+78005003346' className={cls.Communicate__item}>
						<PhoneIcon />
						<span>+7 800 500 33 46</span>
					</a>
					<a href='mailto:info@simter.ru' className={cls.Communicate__item}>
						<MailIcon />
						<span>info@simter.ru</span>
					</a>
				</div>

				<Menu className={cls.Hamburger} />
			</div>
		</header>
	)
}
