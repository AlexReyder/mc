'use client'
import isAuth from '@/admin-scenes/isAuth '
import AdminProducts from '@/admin-scenes/product/AdminProducts'
const Add = () => {
	return <AdminProducts />
}

export default isAuth(Add)
