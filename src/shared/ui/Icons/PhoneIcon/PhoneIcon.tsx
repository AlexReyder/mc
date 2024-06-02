import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const PhoneIcon: FC<Icons> = ({ className, fill = '#fff' }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 57 55'
			height={16}
			width={16}
		>
			<g clipPath='url(#clip0_22_4)'>
				<mask
					id='mask0_22_4'
					style={{ maskType: 'luminance' }}
					maskUnits='userSpaceOnUse'
					x='0'
					y='0'
					width='57'
					height='55'
				>
					<path d='M57 0H0V55H57V0Z' fill={fill} />
				</mask>
				<g mask='url(#mask0_22_4)'>
					<path
						d='M18.0359 2.62403C17.1937 0.641825 14.9734 -0.413221 12.8516 0.151601L3.22656 2.70929C1.32344 3.22083 0 4.90464 0 6.8229C0 33.1884 21.9406 54.5664 49 54.5664C50.9687 54.5664 52.6969 53.2769 53.2219 51.4226L55.8469 42.0444C56.4266 39.9769 55.3437 37.8135 53.3094 36.993L42.8094 32.7301C41.0266 32.0055 38.9594 32.5064 37.7453 33.9664L33.3266 39.2203C25.6266 35.6715 19.3922 29.597 15.75 22.0944L21.1422 17.7996C22.6406 16.6061 23.1547 14.6025 22.4109 12.8654L18.0359 2.63469V2.62403Z'
						fill={fill}
					/>
				</g>
			</g>
			<defs>
				<clipPath id='clip0_22_4'>
					<rect width='57' height='55' fill={fill} />
				</clipPath>
			</defs>
		</svg>
	)
}
