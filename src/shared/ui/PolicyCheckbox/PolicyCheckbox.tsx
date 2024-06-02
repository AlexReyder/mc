import Link from 'next/link'
import { useId } from 'react'
import cls from './PolicyCheckbox.module.scss'

interface PolicyCheckboxProps {
	change?: any
	className?: any
}

const PolicyCheckbox = ({ change, className }: PolicyCheckboxProps) => {
	const id = useId()
	return (
		<div className={cls.Container}>
			<div className={cls.CheckboxWrapper}>
				<input type='checkbox' id={`${id}`} defaultChecked onChange={change} />
				<label htmlFor={`${id}`} className={cls.Label}></label>
			</div>
			<div>
				<p className={`${cls.Policy} ${className}`}>
					Согласен(а) на обработку &nbsp;
					<Link target='_blank' href='/policy' className={cls.Link}>
						персональных данных
					</Link>
				</p>
			</div>
		</div>
	)
}
export default PolicyCheckbox
