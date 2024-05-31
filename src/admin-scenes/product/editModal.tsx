'use client'
import { productItemI } from '@/app/api/admin/saveOrder/route'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import { Alert, Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import cls from './product.module.scss'

interface EditPalettesModalI {
	open: boolean | null
	itemId: number
	handleClose: () => void
	updateData: () => void
}

const EditPalettesModal = ({
	open,
	itemId,
	handleClose,
	updateData,
}: EditPalettesModalI) => {
	useEffect(() => {
		axios('/api/admin/getProducts', {
			headers: {
				'Cache-Control': 'no-cache',
				Pragma: 'no-cache',
				Expires: '0',
			},
		}).then(res => {
			const info = res.data.filter((item: productItemI) => item.id === itemId)
			const { id, type, name, object, palette, minuature } = info[0]

			setObjectId(id)
			setObjectType(type)
			setObjectName(name)
			setObjectImages(object)
			setPaletteImages(palette)
			setMiniatureImages(minuature)
		})
	}, [itemId])

	const [objectName, setObjectName] = useState('')
	const [objectId, setObjectId] = useState('')
	const [objectType, setObjectType] = useState('')
	const [objectImages, setObjectImages] = useState<string[]>([])
	const [paletteImages, setPaletteImages] = useState<string[]>([])
	const [miniatureImages, setMiniatureImages] = useState<string[]>([])

	const [clearOutputData, activateClearOutputData] = useState(false)
	const [isAllDataCompleteAlert, setAllDataCompleteAlert] = useState(true)

	const handleChangeObjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setObjectName(e.target.value)
	}

	const cancelAdding = () => {
		resetStatesData()
		setAllDataCompleteAlert(true)
		handleClose()
	}
	async function addNewPalette() {
		if (objectName === '') {
			setAllDataCompleteAlert(false)
			return
		}

		const data = {
			id: objectId,
			type: objectType,
			name: objectName,
			object: objectImages,
			palette: paletteImages,
			minuature: miniatureImages,
		}

		let formData = new FormData()
		formData.append('data', JSON.stringify(data))

		await axios
			.post('/api/admin/editProduct', formData, {
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
		setObjectName('')
		setObjectImages([])
		setPaletteImages([])
		setMiniatureImages([])
	}

	return (
		<div className={`${cls.Modal} ${open ? cls.ModalActive : ''}`}>
			<div className={cls.ModalContent}>
				<Typography
					variant='h2'
					sx={{
						fontWeight: 500,
						textAlign: 'center',
						mt: '20px',
						mb: '20px',
					}}
				>
					{objectType === 'walls'
						? 'Добавить новую стену'
						: objectType === 'floors'
						? 'Добавить новый пол'
						: 'Добавить новую мокрую зону'}
				</Typography>
				<div className='product-name'>
					<TextField
						margin='normal'
						required
						label='Название продукции'
						type='text'
						sx={{ width: '50%' }}
						value={objectName}
						onChange={handleChangeObjectName}
					/>
				</div>

				<div className={cls.ModalMain}>
					<div className={`${cls.ModalBox} ${cls.ModalBox1}`}>
						<img src={objectImages[0]} alt='' />
					</div>
					<div className={`${cls.ModalBox} ${cls.ModalBox2}`}>
						<img src={paletteImages[0]} alt='' />
					</div>
				</div>

				<div className={cls.PaletteWrapper}>
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
						Сохранить изменения
					</Button>
				</div>
			</div>
			{!isAllDataCompleteAlert ? (
				<Alert
					variant='filled'
					severity='error'
					className={cls.Alert}
					onClick={() => setAllDataCompleteAlert(true)}
				>
					Не все поля заполнены!
				</Alert>
			) : null}
		</div>
	)
}

export default EditPalettesModal
