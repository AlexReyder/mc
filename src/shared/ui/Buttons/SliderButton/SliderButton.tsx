import classNames from '@/shared/lib/classNames/classNames'
import { Typography } from '@/shared/ui/Typography/Typography'
import cls from './SliderButton.module.scss'
interface SliderButtonProps {
	className?: string
	text: string
	changeSlide: () => void
}

export const SliderButton = ({
	className,
	text,
	changeSlide,
}: SliderButtonProps) => {
	return (
		<button
			className={classNames(cls.SliderButton, {}, [cls[className!]])}
			onClick={changeSlide}
		>
			<Typography variant='SliderBtn'>{text}</Typography>
		</button>
	)
}
