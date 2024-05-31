import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './SidebarWidgetButton.module.scss'

interface SidebarWidgetButtonProps {
	className?: string
	children: ReactNode
	onClick?: () => void
}

export const SidebarWidgetButton = ({
	className,
	children,
	onClick,
}: SidebarWidgetButtonProps) => {
	return (
		<button
			className={classNames(cls.SidebarWidgetButton, {}, [className!])}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
