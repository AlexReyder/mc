import { FC } from 'react'
import { Icons } from '../OkIcon/OkIcon'

export const WatchIcon: FC<Icons> = ({ className, fill }: Icons) => {
	return (
		<svg
			className={className}
			fill={fill}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 16 15'
		>
			<g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
				<g
					transform='translate(-632.000000, -125.000000)'
					fill='#fff'
					fillRule='nonzero'
				>
					<path d='M641,135 C641.552285,135 642,135.447715 642,136 C642,136.552285 641.552285,137 641,137 L641,137 L639,137 C638.447715,137 638,136.552285 638,136 C638,135.447715 638.447715,135 639,135 L639,135 Z M644,130 C644.552285,130 645,130.447715 645,131 C645,131.552285 644.552285,132 644,132 L644,132 L636,132 C635.447715,132 635,131.552285 635,131 C635,130.447715 635.447715,130 636,130 L636,130 Z M647,125 C647.552285,125 648,125.447715 648,126 C648,126.552285 647.552285,127 647,127 L647,127 L633,127 C632.447715,127 632,126.552285 632,126 C632,125.447715 632.447715,125 633,125 L633,125 Z' />
				</g>
			</g>
		</svg>
	)
}
