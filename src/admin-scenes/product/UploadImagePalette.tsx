'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import ErrorIcon from '@mui/icons-material/Error'
import { CircularProgress } from '@mui/material'
import cls from './product.module.scss'

interface UploadImageI {
	defaultStatus: string
	folderName: string
	type: string
	returnData: (data: any) => void
	clearOutputData: boolean
}

const UploadImagePalette = ({
	defaultStatus,
	folderName,
	type,
	returnData,
	clearOutputData,
}: UploadImageI) => {
	const [status, setStatus] = useState('upload')
	const [data, setData] = useState(null)
	const [imgUrl, setImgUrl] = useState('')
	const [imgUrlMiniature, setImgUrlMiniature] = useState('')
	useEffect(() => {
		setData(null)
		setImgUrl('')
		setImgUrlMiniature('')
		setStatus('upload')
	}, [clearOutputData])

	async function handleUploadHouseImage(
		event: React.ChangeEvent<HTMLInputElement>
	) {
		setStatus('loading')

		if (!event.target.files) return

		let formData = new FormData()
		formData.append('file', event.target.files[0])
		formData.append('objectUploadType', 'palette')
		formData.append('folderName', folderName)
		formData.append('objectType', type)

		await axios
			.post('/api/admin/uploadImagePalette', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				setImgUrl(res.data[0].images[0])
				setImgUrlMiniature(res.data[1].images[0])
				setData(res.data)
				returnData(res.data)
				setStatus('loaded')
				console.log(res.data[1].images[0])
			})
			.catch(err => {
				setStatus('error')
				console.log(err)
			})
	}
	return (
		<div className={cls.ModalWrapper}>
			<div className={cls.ModalPalette}>
				<label
					htmlFor='house1'
					className={cls.ModalPaper}
					style={{ backgroundImage: `url("${imgUrl !== '' ? imgUrl : ''}")` }}
				>
					{status === 'upload' ? (
						<DriveFolderUploadIcon className='modal__icon-upload' />
					) : status === 'loading' ? (
						<CircularProgress />
					) : status === 'loaded' ? null : (
						<ErrorIcon className='modal__icon-error' />
					)}

					<input
						type='file'
						name='house1'
						id='house1'
						className={cls.ModalUpload}
						onChange={handleUploadHouseImage}
					/>
				</label>
				<p className={cls.ModalTitle}>
					{status === 'loaded' ? 'Палитра' : 'Загрузить палитру'}
				</p>
			</div>

			{/* <div className={cls.ModalMiniature}>
				<div
					style={{
						backgroundImage: `url("${
							imgUrlMiniature !== ''
								? imgUrlMiniature + '?' + `${new Date().getMilliseconds()}`
								: ''
						}")`,
					}}
				/>
				<p className='modal__title'>Миниатюра</p>
			</div> */}
		</div>
	)
}
export default UploadImagePalette
