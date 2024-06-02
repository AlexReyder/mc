import cls from './Bonus.module.scss'

interface BonusInt {
	className?: string
	img: string
	description: string
}

const Bonus = ({ img, description, className }: BonusInt) => {
	return (
		<div className={`${cls.Bonus} ${className}`}>
			<div
				className={cls.BonusOverlay}
				style={{
					backgroundImage: `url(${img})`,
				}}
			>
				<div className={cls.BonusLayer}></div>
				<p className={cls.BonusDescription}>{description}</p>
			</div>
			<div className={cls.BonusLock}>
				<svg viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M2.99997 4.53334C3.14142 4.53334 3.27708 4.47715 3.37709 4.37713C3.47711 4.27711 3.5333 4.14145 3.5333 4C3.5333 3.704 3.2933 3.46667 2.99997 3.46667C2.85852 3.46667 2.72287 3.52286 2.62285 3.62288C2.52283 3.7229 2.46664 3.85855 2.46664 4C2.46664 4.14145 2.52283 4.27711 2.62285 4.37713C2.72287 4.47715 2.85852 4.53334 2.99997 4.53334ZM4.59997 2.13334C4.74142 2.13334 4.87708 2.18953 4.97709 2.28955C5.07711 2.38957 5.1333 2.52522 5.1333 2.66667V5.33334C5.1333 5.47479 5.07711 5.61044 4.97709 5.71046C4.87708 5.81048 4.74142 5.86667 4.59997 5.86667H1.39997C1.25852 5.86667 1.12287 5.81048 1.02285 5.71046C0.922828 5.61044 0.866638 5.47479 0.866638 5.33334V2.66667C0.866638 2.37067 1.10664 2.13334 1.39997 2.13334H1.66664V1.6C1.66664 1.24638 1.80711 0.907243 2.05716 0.657194C2.30721 0.407146 2.64635 0.26667 2.99997 0.26667C3.17507 0.26667 3.34845 0.301158 3.51022 0.368164C3.67198 0.43517 3.81897 0.533383 3.94278 0.657194C4.06659 0.781006 4.1648 0.927991 4.23181 1.08976C4.29882 1.25153 4.3333 1.42491 4.3333 1.6V2.13334H4.59997ZM2.99997 0.800004C2.7878 0.800004 2.58431 0.884289 2.43429 1.03432C2.28426 1.18435 2.19997 1.38783 2.19997 1.6V2.13334H3.79997V1.6C3.79997 1.38783 3.71569 1.18435 3.56566 1.03432C3.41563 0.884289 3.21214 0.800004 2.99997 0.800004Z'></path>
				</svg>
			</div>
		</div>
	)
}

export default Bonus
