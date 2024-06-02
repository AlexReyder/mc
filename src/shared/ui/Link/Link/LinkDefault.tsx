import classNames from '@/shared/lib/classNames/classNames'
import Link from 'next/link'
import cls from './Link.module.scss'
interface LinkProps {
	to: string
	className?: string
	text: string
	theme?: string
}

export const LinkDefault = ({ to, className, text }: LinkProps) => {
	return (
		<Link href={to} className={classNames(cls.Link, {}, [className!])}>
			<p>{text}</p>
		</Link>
	)
}
