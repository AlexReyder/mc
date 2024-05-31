'use client'
import AdminHero from '@/admin-scenes/hero/AdminHero'
import isAuth from '@/admin-scenes/isAuth '
const AdHero = () => {
	return <AdminHero />
}
export default isAuth(AdminHero)
