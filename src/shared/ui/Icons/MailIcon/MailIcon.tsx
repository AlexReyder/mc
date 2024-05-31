import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const MailIcon: FC<Icons> = ({ className, fill = 'none' }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 22 16'
			height={16}
			width={16}
		>
			<g clipPath='url(#clip0_22_2)'>
				<path
					d='M2.05254 0C0.919369 0 0 0.895833 0 2C0 2.62917 0.303606 3.22083 0.821018 3.6L10.1259 10.4C10.6134 10.7542 11.2804 10.7542 11.7679 10.4L21.0728 3.6C21.5902 3.22083 21.8938 2.62917 21.8938 2C21.8938 0.895833 20.9744 0 19.8413 0H2.05254ZM0 4.66667V13.3333C0 14.8042 1.22725 16 2.73673 16H19.1571C20.6666 16 21.8938 14.8042 21.8938 13.3333V4.66667L12.5889 11.4667C11.614 12.1792 10.2798 12.1792 9.30487 11.4667L0 4.66667Z'
					fill='white'
				/>
			</g>
			<defs>
				<clipPath id='clip0_22_2'>
					<rect width='22' height='16' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
