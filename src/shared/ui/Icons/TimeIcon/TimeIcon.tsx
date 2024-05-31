import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const TimeIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 32 32'
		>
			<g clipPath='url(#clip0_34_6)'>
				<path
					d='M16 0C7.18479 0 0 7.18479 0 16C0 24.8152 7.18479 32 16 32C24.8152 32 32 24.8152 32 16C32 7.18479 24.8152 0 16 0ZM19.1994 17.6005C19.1994 18.4794 18.4794 19.1994 17.6004 19.1994H9.59966C8.72067 19.1994 8.00069 18.4794 8.00069 17.6005C8.00069 16.72 8.72067 16 9.59966 16H16V8.00077C16 7.12028 16.7199 6.40031 17.6004 6.40031C18.4794 6.40031 19.1994 7.12028 19.1994 8.00077V17.6005Z'
					fill='#3C7B68'
				/>
			</g>
			<defs>
				<clipPath id='clip0_34_6'>
					<rect width='32' height='32' fill='white' />
				</clipPath>
			</defs>
		</svg>
	)
}
