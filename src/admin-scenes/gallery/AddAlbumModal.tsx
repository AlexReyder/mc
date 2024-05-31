'use client'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import RemoveIcon from '@mui/icons-material/Delete'
import { Alert, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Resizer from 'react-image-file-resizer'

import NewAlbum from '././NewAlbum'

interface AddAlbumModalI {
	open: boolean
	handleClose: () => void
	productId: number
	updateData: () => void
}

const AddAlbumModal = ({
	open,
	handleClose,
	productId,
	updateData,
}: AddAlbumModalI) => {
	const [albumName, setAlbumName] = useState('')

	const [album, setAlbum] = useState<string[]>([])
	const [innerId, setInnerId] = useState(1)

	const [clearOutputData, activateClearOutputData] = useState(false)
	const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)

	const handleChangeAlbumName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAlbumName(e.target.value)
	}

	const handleMutateAlbumImages = (data: any) => {
		album.push(data[0])
		setInnerId(innerId + 1)
	}

	const handleRemoveAlbumImage = (i: number) => {
		album.splice(i, 1)
		setInnerId(innerId - 1)
	}

	const resizeFile = (file: Blob, maxWidth: number, maxHeight: number) =>
		new Promise(resolve => {
			Resizer.imageFileResizer(
				file,
				maxWidth,
				maxHeight,
				'JPEG',
				80,
				0,
				uri => {
					resolve(uri)
				},
				'file'
			)
		})
	const cancelAdding = () => {
		if (album.length === 0) {
			resetStatesData()
			handleClose()
			setAllDataCompleteAlert(true)
			return
		}

		let formData = new FormData()
		formData.append('path', `upload/gallery/${albumName}`)
		axios
			.post('/api/admin/cancelAddingNewProduct', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(() => {
				resetStatesData()
				handleClose()
			})
	}
	async function addNewPalette() {
		if (albumName === '' || album.length === 0) {
			setAllDataCompleteAlert(false)
			return
		}

		const data = {
			id: productId,
			name: albumName,
			images: album,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(data))

		await axios
			.post('/api/admin/gallery/addNewAlbum', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				updateData()
				resetStatesData()
				handleClose()
				setAllDataCompleteAlert(true)
			})
			.catch(e => {
				console.log(e)
			})
	}
	const resetStatesData = () => {
		activateClearOutputData(!clearOutputData)
		setAlbumName('')
		setAlbum([])
		setInnerId(1)
	}

	return (
		<div className={`modal ${open ? 'modal--active' : ''}`}>
			<div className='modal__content'>
				<Typography
					variant='h2'
					sx={{
						fontWeight: 500,
						textAlign: 'center',
						mt: '20px',
						mb: '20px',
					}}
				>
					Добавить новый альбом
				</Typography>

				<div className='product-name'>
					<TextField
						margin='normal'
						required
						label='Название альбома'
						type='text'
						sx={{ width: '50%' }}
						value={albumName}
						onChange={handleChangeAlbumName}
					/>
				</div>

				<div className='product-images'>
					{album.map((item, i) => (
						<div key={item} className='product-image'>
							<img
								src={item}
								width={120}
								height={120}
								alt='Альбом'
								loading='lazy'
							/>
							<button
								className='product-delete-image'
								onClick={() => handleRemoveAlbumImage(i)}
							>
								<RemoveIcon sx={{ fill: '#fff' }} />
							</button>
						</div>
					))}
					<div className='modal__main'>
						<div className='modal__box modal__box--1'>
							<NewAlbum
								defaultStatus={'upload'}
								resizeFile={resizeFile}
								innerId={innerId}
								albumName={albumName}
								returnData={handleMutateAlbumImages}
								clearOutputData={clearOutputData}
							/>
						</div>
					</div>
				</div>

				<div className='palette__wrapper'>
					<Button
						variant='contained'
						size='large'
						sx={{
							mt: 3,
							mb: 2,
							mr: 2,
							backgroundColor: 'var(--color-primary)',
						}}
						endIcon={<ClearIcon />}
						onClick={cancelAdding}
					>
						Отмена
					</Button>
					<Button
						variant='contained'
						size='large'
						sx={{
							mt: 3,
							mb: 2,
							mr: 2,
							backgroundColor: 'var(--color-primary)',
						}}
						endIcon={<AddIcon />}
						onClick={addNewPalette}
					>
						Добавить
					</Button>
				</div>
			</div>
			{!isAllDataCompleteAlert ? (
				<Alert
					variant='filled'
					severity='error'
					className='alert'
					onClick={() => setAllDataCompleteAlert(true)}
				>
					Не все поля заполнены!
				</Alert>
			) : null}
		</div>
	)
}

export default AddAlbumModal

export interface AlbumsI {
	id: number
	name: string
	images: string[]
}
