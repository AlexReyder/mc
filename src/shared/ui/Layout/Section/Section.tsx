import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './Section.module.scss'
interface SectionProps {
	id: string
	className?: string
	children: ReactNode
	style?: React.CSSProperties
}

export const Section = ({ id, className, children, style }: SectionProps) => {
	return (
		<section
			id={id}
			className={classNames(cls.Section, {}, [className!])}
			style={style}
		>
			{children}
		</section>
	)
}
