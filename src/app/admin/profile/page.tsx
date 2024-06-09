'use client'
import isAuth from '@/admin-scenes/isAuth '

import AdminProfile from '@/admin-scenes/account/AdminProfile'
const Profile = () => {
	return <AdminProfile />
}
export default isAuth(Profile)
