'use client'

import Header from '@/admin-scenes/Header'
import { Alert, Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
const AdminProfile = () => {
	const [changeError, setChangeError] = useState(false)
	const [changeSuccessful, setChangeSuccessful] = useState(false)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		axios
			.post(`${process.env.domainUrl}/api/auth/reset`, data, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => {
				if (res.data) {
					setChangeSuccessful(true)
					setChangeError(false)
				} else {
					setChangeError(true)
					setChangeSuccessful(false)
				}
			})
	}

	return (
		<Box>
			<Header
				title='Учетная запись'
				subtitle='Изменение пароля учетной записи администратора'
			/>
			<Box
				sx={{
					marginTop: 8,
					marginLeft: '10px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
				}}
			>
				<Box component='form' onSubmit={handleSubmit} sx={{ mt: 2 }}>
					<TextField
						error={changeError}
						margin='normal'
						required
						fullWidth
						name='oldPassword'
						label='Старый пароль'
						type='password'
						id='oldPassword'
						autoComplete='current-password'
					/>
					<TextField
						error={changeError}
						margin='normal'
						required
						fullWidth
						name='newPassword'
						label='Новый пароль'
						type='password'
						id='newPassword'
						autoComplete='current-password'
					/>
					<TextField
						error={changeError}
						margin='normal'
						required
						fullWidth
						name='confirmPassword'
						label='Подтвердите новый пароль'
						type='password'
						id='confirmPassword'
						autoComplete='current-password'
					/>

					<Button
						type='submit'
						variant='contained'
						size='large'
						sx={{ mt: 3, mb: 2, backgroundColor: 'var(--color-primary)' }}
					>
						Изменить
					</Button>
				</Box>
			</Box>
			{changeSuccessful ? (
				<Alert
					variant='filled'
					severity='success'
					className='alert'
					onClick={() => setChangeSuccessful(false)}
				>
					Пароль успешно измененен!
				</Alert>
			) : null}
		</Box>
	)
}
export default AdminProfile
