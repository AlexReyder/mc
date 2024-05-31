import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './ServiceButton.module.scss'
interface ServiceButtonProps {
	className?: string
	bg?: any
	children: ReactNode
	name?: string
	onClick: (name: string) => void
	onMouseEnter: (arg: string) => void
	onMouseLeave: () => void
}

export const ServiceButton = ({
	className,
	children,
	bg,
	name,
	onMouseEnter,
	onMouseLeave,
	onClick,
}: ServiceButtonProps) => {
	return (
		<button
			className={classNames(cls.ServiceButton, {}, [className!])}
			onMouseEnter={() => onMouseEnter(bg)}
			onMouseLeave={onMouseLeave}
			onClick={() => onClick(name!)}
		>
			{children}
		</button>
	)
}
