'use client'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import RemoveIcon from '@mui/icons-material/Delete'
import { Alert, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Resizer from 'react-image-file-resizer'
import { heroDataI } from './AddHeroModal'
import NewHero from './NewHero'

interface EditHeroModalI {
	open: boolean | null
	itemId: number
	handleClose: () => void
	updateData: () => void
}

const EditHeroModal = ({
	open,
	itemId,
	handleClose,
	updateData,
}: EditHeroModalI) => {
	console.log(itemId)
	useEffect(() => {
		axios('/api/admin/hero/getHero', {
			headers: {
				'Cache-Control': 'no-cache',
				Pragma: 'no-cache',
				Expires: '0',
			},
		}).then(res => {
			const info = res.data.filter((item: heroDataI) => item.id === itemId)
			const { id, name, description, images } = info[0]
			setProductId(id)
			setProductName(name)
			setHeroDescription(description)
			setProductImages(images)
			setInnerId(images.length + 1)
		})
	}, [itemId])

	const [productId, setProductId] = useState('')
	const [productName, setProductName] = useState('')
	const [heroDescription, setHeroDescription] = useState('')
	const [productImages, setProductImages] = useState<string[]>([])
	const [innerId, setInnerId] = useState(1)

	const [clearOutputData, activateClearOutputData] = useState(false)
	const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)

	const handleChangeProductName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setProductName(e.target.value)
	}

	const handleChangeHeroDescription = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setHeroDescription(e.target.value)
	}

	const handleMutateProductImages = (data: any) => {
		productImages.push(data[0])
		setInnerId(innerId + 1)
	}

	const handleRemoveProductImage = (i: number) => {
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
		resetStatesData()
		setAllDataCompleteAlert(true)
		handleClose()
	}
	async function addNewPalette() {
		if (productName === '' || productImages.length === 0) {
			setAllDataCompleteAlert(false)
			return
		}

		const data = {
			id: productId,
			name: productName,
			description: heroDescription,
			images: productImages,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(data))

		await axios
			.post('/api/admin/hero/editHero', formData, {
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
						label='Название продукции'
						type='text'
						sx={{ width: '50%' }}
						value={productName}
						onChange={handleChangeProductName}
					/>
				</div>

				<div className='product-description'>
					<TextField
						margin='normal'
						required
						label='Подзаголовок'
						type='text'
						sx={{ width: '50%' }}
						value={heroDescription}
						onChange={handleChangeHeroDescription}
					/>
				</div>

				<div className='product-images'>
					{productImages.map((item, i) => (
						<div key={item} className='product-image'>
							<img
								src={item}
								width={120}
								height={120}
								alt='Продукция'
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
							{productImages.length >= 1 ? null : (
								<NewHero
									defaultStatus={'upload'}
									resizeFile={resizeFile}
									heroId={itemId}
									heroName={productName}
									returnData={handleMutateProductImages}
									clearOutputData={clearOutputData}
								/>
							)}
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

export default EditHeroModal
