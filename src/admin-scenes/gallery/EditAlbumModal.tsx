'use client'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import RemoveIcon from '@mui/icons-material/Delete'
import { Alert, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Resizer from 'react-image-file-resizer'
import { AlbumsI } from './AddAlbumModal'
import NewAlbum from './NewAlbum'

interface EditAlbumModalI {
	open: boolean | null
	itemId: number
	handleClose: () => void
	updateData: () => void
}

const EditAlbumModal = ({
	open,
	itemId,
	handleClose,
	updateData,
}: EditAlbumModalI) => {
	useEffect(() => {
		axios('/api/admin/gallery/getAlbums', {
			headers: {
				'Cache-Control': 'no-cache',
				Pragma: 'no-cache',
				Expires: '0',
			},
		}).then(res => {
			const info = res.data.filter((item: AlbumsI) => item.id === itemId)
			const { id, name, images } = info[0]
			setProductId(id)
			setProductName(name)
			setProductImages(images)
			setInnerId(images.length + 1)
		})
	}, [itemId])

	const [productId, setProductId] = useState('')
	const [productName, setProductName] = useState('')
	const [productImages, setProductImages] = useState<string[]>([])
	const [innerId, setInnerId] = useState(1)

	const [clearOutputData, activateClearOutputData] = useState(false)
	const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)

	const [deletedImages, setDeletedImages] = useState<string[]>([])
	const [addedImages, setAddedImages] = useState<string[]>([])

	const handleChangeProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProductName(e.target.value)
	}

	const handleMutateProductImages = (data: any) => {
		addedImages.push(data[0])
		productImages.push(data[0])
		setInnerId(innerId + 1)
	}

	const handleRemoveProductImage = (i: number) => {
		deletedImages.push(productImages[i])
		productImages.splice(i, 1)
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
		if (addedImages.length !== 0) {
			let formData = new FormData()
			const deleted = addedImages as unknown as string | Blob
			formData.append('delete', JSON.stringify(deleted))
			axios
				.post('/api/admin/gallery/removeFiles', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(() => {
					handleClose()
				})
		}
		resetStatesData()
		setAllDataCompleteAlert(true)
		handleClose()
	}
	async function addNewPalette() {
		if (productName === '' || productImages.length === 0) {
			setAllDataCompleteAlert(false)
			return
		}

		if (deletedImages.length !== 0) {
			let formData = new FormData()
			const deleted = deletedImages as unknown as string | Blob
			formData.append('delete', JSON.stringify(deleted))
			await axios
				.post('/api/admin/gallery/removeFiles', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(() => {
					handleClose()
				})
		}

		const data = {
			id: productId,
			name: productName,
			images: productImages,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(data))

		await axios
			.post('/api/admin/gallery/editAlbum', formData, {
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
		setProductName('')
		setProductImages([])
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
					Редактировать альбом
				</Typography>
				<div className='product-name'>
					<TextField
						margin='normal'
						required
						label='Название альбома'
						type='text'
						sx={{ width: '50%' }}
						value={productName}
						onChange={handleChangeProductName}
						disabled
					/>
				</div>

				<div className='product-images'>
					{productImages.map((item, i) => (
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
								onClick={() => handleRemoveProductImage(i)}
							>
								<RemoveIcon sx={{ fill: '#fff' }} />
							</button>
						</div>
					))}
					<div className='modal__main'>
						<div className='modal__box modal__box--1'>
							{productName ? (
								<NewAlbum
									defaultStatus={'upload'}
									resizeFile={resizeFile}
									innerId={innerId}
									albumName={productName}
									returnData={handleMutateProductImages}
									clearOutputData={clearOutputData}
								/>
							) : null}
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
						Сохранить
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

export default EditAlbumModal
