import { ReactNode } from 'react'
import { ArrowRightIcon } from '../../Icons/ArrowRightIcon/ArrowRightIcon'
import cls from './NextQButton.module.scss'

interface NextQButtonProps {
	className?: string
	text: string | ReactNode
	type?: 'button' | 'submit'
	onClick?: (e?: any) => void
	value?: string
}

export const NextQButton = ({
	className,
	text,
	type = 'button',
	value,
	onClick,
}: NextQButtonProps) => {
	return (
		<button
			type={type}
			className={`${cls.PrimaryButton} ${className}`}
			value={value}
			onClick={onClick}
		>
			<p className={cls.Text}>{text} </p>
			<ArrowRightIcon />
		</button>
	)
}
