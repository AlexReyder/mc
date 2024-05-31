'use client'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import RemoveIcon from '@mui/icons-material/Delete'
import { Alert, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import Resizer from 'react-image-file-resizer'
import NewHero from './NewHero'

interface AddHeroModalI {
	open: boolean
	handleClose: () => void
	productId: number
	updateData: () => void
}

export interface heroDataI {
	id: number
	heroName: string
	heroDescription: string
	images: string[]
}

const AddHeroModal = ({
	open,
	handleClose,
	productId,
	updateData,
}: AddHeroModalI) => {
	const [heroName, setHeroName] = useState('')
	const [heroDescription, setHeroDescription] = useState('')

	const [hero, setHero] = useState<string[]>([])
	const [innerId, setInnerId] = useState(1)

	const [clearOutputData, activateClearOutputData] = useState(false)
	const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)

	const handleChangeHeroName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setHeroName(e.target.value)
	}

	const handleChangeHeroDescription = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setHeroDescription(e.target.value)
	}

	const handleMutateHeroImages = (data: any) => {
		hero.push(data[0])
		setInnerId(innerId + 1)
	}

	const handleRemoveHeroImage = (i: number) => {
		hero.splice(i, 1)
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
		if (hero.length === 0) {
			resetStatesData()
			handleClose()
			setAllDataCompleteAlert(true)
			return
		}

		let formData = new FormData()
		formData.append('path', `upload/hero/${productId}.jpg`)
		axios
			.post('/api/admin/hero/cancelAddingNewHero', formData, {
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
		if (heroName === '' || hero.length === 0) {
			setAllDataCompleteAlert(false)
			return
		}

		const data = {
			id: productId,
			name: heroName,
			description: heroDescription,
			images: hero,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(data))

		await axios
			.post('/api/admin/hero/addNewHero', formData, {
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
		setHeroName('')
		setHeroDescription('')
		setHero([])
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
					Добавить новый слайд
				</Typography>

				<div className='product-name'>
					<TextField
						margin='normal'
						required
						label='Заголовок'
						type='text'
						sx={{ width: '50%' }}
						value={heroName}
						onChange={handleChangeHeroName}
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
					{hero.map((item, i) => (
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
								onClick={() => handleRemoveHeroImage(i)}
							>
								<RemoveIcon sx={{ fill: '#fff' }} />
							</button>
						</div>
					))}
					<div className='modal__main'>
						<div className='modal__box modal__box--1'>
							{hero.length >= 1 ? null : (
								<NewHero
									defaultStatus={'upload'}
									resizeFile={resizeFile}
									heroId={productId}
									heroName={heroName}
									returnData={handleMutateHeroImages}
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

export default AddHeroModal
