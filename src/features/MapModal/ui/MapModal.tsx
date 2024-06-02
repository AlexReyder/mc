'use client'
import { PhoneIcon } from '@/shared/ui/Icons/PhoneIcon/PhoneIcon'
import { Modal } from '@/shared/ui/Modal'
import cls from './MapModal.module.scss'

interface MapModalProps {
	isOpen: boolean
	handleClose: () => void
}

export const MapModal = ({ isOpen, handleClose }: MapModalProps) => {
	return (
		<Modal
			type='Consult'
			isOpen={isOpen}
			onClose={handleClose}
			className={cls.Modal}
		>
			<div className={cls.Wrapper}>
				<a href='tel:+78005003346' className={cls.Communicate__item}>
					<PhoneIcon className={cls.Icon} fill='var(--color-primary)' />
					<span>+7 800 500 33 46</span>
				</a>
			</div>
		</Modal>
	)
}
