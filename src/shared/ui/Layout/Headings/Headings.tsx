import classNames from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import cls from './Headings.module.scss'
interface HeadingsProps {
	className?: string
	title: string | ReactNode
	color?: 'b' | 'w'
}

export const Headings = ({ className, title, color = 'b' }: HeadingsProps) => {
	return (
		<div className={classNames(cls.Headings, {}, [className!])}>
			<h2 className={`${cls.Heading} ${color === 'w' ? cls.White : cls.Black}`}>
				{title}
			</h2>
		</div>
	)
}
