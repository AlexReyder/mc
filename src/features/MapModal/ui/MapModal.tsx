'use client'
import { Modal } from '@/shared/ui/Modal'
import cls from './MapModal.module.scss'

interface MapModalProps {
	isOpen: boolean
	handleClose: () => void
}

export const MapModal = ({ isOpen, handleClose }: MapModalProps) => {
	return (
		<Modal type='Consult' isOpen={isOpen} onClose={handleClose}>
			<div className={cls.Wrapper}>test</div>
		</Modal>
	)
}
