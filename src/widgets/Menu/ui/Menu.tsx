'use client'
import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { ViberIcon } from '@/shared/ui/Icons/ViberIcon/ViberIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'
import { MessangerLink } from '@/shared/ui/Link/MessangerLink/MessangerLink'
import Link from 'next/link'
import { useState } from 'react'
import './Menu.scss'

interface MenuProps {
	className?: string
}

export const Menu = ({ className }: MenuProps) => {
	const [menu, toggleMenu] = useState(false)

	const onToggle = () => {
		if (!menu) {
			// document.body.style.overflow = 'hidden'
		} else {
			// document.body.style.overflow = ''
		}
		toggleMenu(!menu)
	}

	return (
		<div className={`navigation ${menu ? 'nav-active' : ''} f-c ${className}`}>
			<div className='nav-but-wrap' onClick={onToggle}>
				<div className='menu-icon hover-target'>
					<span className='menu-icon__line menu-icon__line-left'></span>
					<span className='menu-icon__line'></span>
					<span className='menu-icon__line menu-icon__line-right'></span>
				</div>
			</div>

			<nav className='nav'>
				<div className='nav__content'>
					<ul className='nav__list'>
						<li className='nav__list-item'>
							<Link href='/'>Главная</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/catalog'>Каталог</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/gallery'>Галерея</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/delivery' onClick={onToggle}>
								Доставка
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/about' onClick={onToggle}>
								О компании
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='/contacts' onClick={onToggle}>
								Контакты
							</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='tel:+79655588882'>+7 (965) 558-88-82</Link>
						</li>
						<li className='nav__list-item'>
							<Link href='mailto:slava1700@yandex.ru'>slava1700@yandex.ru</Link>
						</li>
						<li className='nav__list-item nav__list-item--messangers'>
							<MessangerLink
								to='https://wa.me/79655588882'
								className='f-c'
								icon={<WhatsAppIcon className='nav__list-icon' />}
							/>
							<MessangerLink
								to='viber://chat?number=79655588882'
								className='f-c'
								icon={<ViberIcon className='nav__list-icon' />}
							/>
							<MessangerLink
								to='https://t.me/+79655588882'
								className='f-c'
								icon={<TelegramIcon className='nav__list-icon' />}
							/>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
