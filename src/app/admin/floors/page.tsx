'use client'
import isAuth from '@/admin-scenes/isAuth '
import AdminProducts from '@/admin-scenes/product/AdminProducts'
const Floors = () => {
	return <AdminProducts type='floors' />
}

export default isAuth(Floors)
