'use client'
import isAuth from '@/admin-scenes/isAuth '
import AdminProducts from '@/admin-scenes/product/AdminProducts'
const Walls = () => {
	return <AdminProducts type='walls' />
}

export default isAuth(Walls)
