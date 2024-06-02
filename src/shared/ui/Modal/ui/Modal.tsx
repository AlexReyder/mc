'use client'
import classNames from '@/shared/lib/classNames/classNames'
import { DefaultButton } from '@/shared/ui/Buttons/DefaultButton/DefaultButton'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import cls from './Modal.module.scss'
interface ModalProps {
	className?: string
	children?: ReactNode
	isOpen: boolean
	onClose?: () => void
	lazy?: boolean
	type?: 'Consult' | 'Quiz'
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose, lazy, type } = props

	const [isClosing, setIsClosing] = useState(false)
	const [isMounted, setIsMounted] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler()
			}
		},
		[closeHandler]
	)

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}

		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true)
		}
	}, [isOpen])

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	}

	if (lazy && !isMounted) {
		return null
	}

	return isMounted
		? createPortal(
				<section className={classNames(cls.Modal, mods, [])}>
					<figure className={cls.overlay} onClick={closeHandler}>
						<section
							className={`${cls.content} ${cls[type!]} ${className}`}
							onClick={onContentClick}
						>
							<DefaultButton onClick={closeHandler} className={cls.Close}>
								&times;
							</DefaultButton>
							{children}
						</section>
					</figure>
				</section>,
				document.body
		  )
		: null

	return (
		// <Portal section='section' id='hey' className={'12'}>
		<section className={classNames(cls.Modal, mods, [])}>
			<figure className={cls.overlay} onClick={closeHandler}>
				<section
					className={`${cls.content} ${cls[type!]}`}
					onClick={onContentClick}
				>
					<DefaultButton onClick={closeHandler} className={cls.Close}>
						&times;
					</DefaultButton>
					{children}
				</section>
			</figure>
		</section>
		// </Portal>
	)
}
