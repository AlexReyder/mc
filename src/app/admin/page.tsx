'use client'
import isAuth from '@/admin-scenes/isAuth '
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
const Add = () => {
	const router = useRouter()

	useEffect(() => {
		router.push('/admin/walls')
	}, [])

	return <></>
}

export default isAuth(Add)
