import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './DefaultButton.module.scss'
interface DefaultButtonProps {
	type?: 'button' | 'submit' | 'reset' | undefined
	className?: string
	children: ReactNode
	onClick?: any
}

export const DefaultButton = ({
	type,
	className,
	children,
	onClick,
}: DefaultButtonProps) => {
	return (
		<button
			type={type ? type : 'button'}
			className={classNames(cls.DefaultButton, {}, [className!])}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
