'use client'
import { MapModal } from '@/features/MapModal/ui/MapModal'
import { NotificationIcon } from '@/shared/ui/Icons/NotificationIcon/NotificationIcon'
import { Headings } from '@/shared/ui/Layout/Headings/Headings'
import { Map, Placemark, YMaps, ZoomControl } from '@pbe/react-yandex-maps'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import cls from './MapSection.module.scss'

export const MapSection = () => {
	const [places, setPlaces] = useState<PlacesI[]>([])
	const [isModalOpen, setModalOpen] = useState<boolean>(false)
	const [isZoomEnabled, setZoomEnabled] = useState<boolean>(false)
	const [closeNotification, setCloseNotification] = useState<boolean>(false)
	const { ref, inView, entry } = useInView({
		triggerOnce: true,
		onChange: (inView, entry) => {
			if (inView) {
				handleCloseNotification()
			}
		},
	})

	useEffect(() => {
		axios.get('https://simter-st.ru/data/microcement/maps').then(res => {
			setPlaces(res.data)
			console.log(res.data)
		})
	}, [])

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown, true)
		document.addEventListener('keyup', handleKeyUp, true)
		return () => {
			document.removeEventListener('keydown', handleKeyDown, true)
			document.removeEventListener('keyup', handleKeyUp, true)
		}
	}, [])

	function handleModalOpen() {
		setModalOpen(true)
	}
	function handleModalClose() {
		setModalOpen(false)
	}

	function handleKeyDown(event: any) {
		if (event.code == 'KeyZ') {
			setZoomEnabled(true)
		}
	}

	function handleKeyUp(event: any) {
		if (event.code == 'KeyZ') {
			setZoomEnabled(false)
		}
	}

	function handleCloseNotification() {
		setTimeout(() => setCloseNotification(true), 10000)
	}

	return (
		<section id='map' className={cls.Section}>
			<Headings title='Наши представительства' className={cls.Heading} />
			<YMaps>
				<div>
					<Map
						defaultState={{
							center: [55.76, 37.64],
							zoom: 4,
						}}
						width={'100%'}
						height={600}
						instanceRef={ref => {
							if (isZoomEnabled) {
								ref && ref.behaviors.enable('scrollZoom')
							} else {
								ref && ref.behaviors.disable('scrollZoom')
							}
						}}
						onKeyDown={handleKeyDown}
						onKeyUp={handleKeyUp}
						tabIndex={0}
					>
						{places.length > 0
							? places.map(place => (
									<Placemark
										defaultGeometry={place.coordinates.split(',')}
										onClick={handleModalOpen}
										options={{ preset: 'islands#dotIcon', iconColor: '#222' }}
									/>
							  ))
							: null}
						<ZoomControl options={{ float: 'right' }} />
					</Map>
				</div>
			</YMaps>
			<MapModal isOpen={isModalOpen} handleClose={handleModalClose} />

			<InView>
				<div
					ref={ref}
					className={`${cls.Notification} ${
						inView && !closeNotification ? cls.NotificationActive : ' '
					}`}
					ref={ref}
				>
					<NotificationIcon className={cls.Icon} />
					<p className={cls.NotificationText}>
						Зажмите клавишу <span>Z</span> на клавиатуре и прокручивайте колесо
						мыши, чтобы изменить масштаб карты.
					</p>
				</div>
			</InView>
		</section>
	)
}

interface PlacesI {
	coordinates: string
}
