import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './Container.module.scss'
interface ContainerProps {
	className?: string
	children: ReactNode
	style?: React.CSSProperties
}

export const Container = ({ className, children, style }: ContainerProps) => {
	return (
		<div className={classNames(cls.Container, {}, [className!])} style={style}>
			{children}
		</div>
	)
}
