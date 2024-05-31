'use client'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { ReactNode } from 'react'
import cls from './ContactSection.module.scss'

import { MailIcon } from '@/shared/ui/Icons/MailIcon/MailIcon'
import { MapIcon } from '@/shared/ui/Icons/MapIcon/MapIcon'
import { PhoneIcon } from '@/shared/ui/Icons/PhoneIcon/PhoneIcon'
import { TelegramIcon } from '@/shared/ui/Icons/TelegramIcon/TelegramIcon'
import { TimeIcon } from '@/shared/ui/Icons/TimeIcon/TimeIcon'
import { ViberIcon } from '@/shared/ui/Icons/ViberIcon/ViberIcon'
import { WhatsAppIcon } from '@/shared/ui/Icons/WhatsAppIcon/WhatsAppIcon'
import { Container } from '@/shared/ui/Layout/Container/Container'


interface ContactSectionI {
	className?: string
}
export const ContactSection = ({ className }: ContactSectionI) => {
	return (
		<Section className={cls.Contacts} id='contacts'>
			<Container className={className}>
				<Headings title='Контакты' />
				<div className={cls.Info}>
					<div className={cls.Item}>
						<h3 className={cls.InfoTitle}>Связаться с нами</h3>
						<InfoEntity
							icon={
								<PhoneIcon
									fill={'var(--color-primary)'}
									className={cls.InfoIcon}
								/>
							}
							link='tel:+79655588882'
							text='+7 (965) 558-88-82'
						/>
						<InfoEntity
							icon={
								<MailIcon
									fill={'var(--color-primary)'}
									className={cls.InfoIcon}
								/>
							}
							link='mailto:slava1700@yandex.ru'
							text='slava1700@yandex.ru'
						/>
						<InfoEntity
							icon={<WhatsAppIcon className={cls.InfoIcon} />}
							link='https://wa.me/79655588882'
							text='Написать в Whatsapp'
						/>
						<InfoEntity
							icon={<ViberIcon className={cls.InfoIcon} />}
							link='viber://chat?number=79655588882'
							text='Написать в Viber'
						/>
						<InfoEntity
							icon={<TelegramIcon className={cls.InfoIcon} />}
							link='https://t.me/+79655588882'
							text='Написать в Telegram'
						/>
					</div>
					<div className={cls.Item}>
						<h3 className={cls.InfoTitle}>Адрес</h3>
						<InfoEntity
							icon={<MapIcon className={cls.InfoIcon} />}
							text='г. Краснокамск, ул.Трубная,3б '
						/>
						<InfoEntity
							icon={<TimeIcon className={cls.InfoIcon} />}
							text='Пн-Сб с 10:00 до 17:00'
						/>
					</div>
					<div className={cls.Item}>
						<h3 className={cls.InfoTitle}>Реквизиты</h3>
						<p className={cls.LinkText}>
							ИП Глухих В.В.
							<br />
							ИНН: 590808267750
							<br />
							ОГРН: 304590833000242
						</p>
					</div>
				</div>
			</Container>
		</Section>
	)
}
interface InfoEntityProps {
	icon: ReactNode
	link?: string
	text: string
}
const InfoEntity = ({ icon, link, text }: InfoEntityProps) => {
	return (
		<div className={cls.InfoEntity}>
			{icon}

			{link === undefined ? (
				<p className={cls.LinkText}>{text}</p>
			) : (
				<a href={link} className={cls.InfoValue}>
					<p className={cls.LinkText}>{text}</p>
				</a>
			)}
		</div>
	)
}
