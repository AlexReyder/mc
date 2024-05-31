'use client'
import isAuth from '@/admin-scenes/isAuth '
import AdminProducts from '@/admin-scenes/product/AdminProducts'
const WetAreas = () => {
	return <AdminProducts type='wet' />
}

export default isAuth(WetAreas)
