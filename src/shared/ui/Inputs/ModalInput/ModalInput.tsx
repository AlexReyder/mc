import classNames from '@/shared/lib/classNames/classNames'
import cls from './ModalInput.module.scss'

interface ModalInputProps {
	className?: string
	placeholder: string
	required?: boolean
}

export const ModalInput = (props: ModalInputProps) => {
	const { className, placeholder, required = false } = props
	return (
		<input
			type='text'
			// placeholder={placeholder}
			required={required}
			{...props}
			className={classNames(cls.ModalInput, {}, [className!])}
		/>
	)
}
