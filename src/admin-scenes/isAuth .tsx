'use client'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import { isAuthenticated } from './Auth'

export default function isAuth(Component: any) {
	return function IsAuth(props: any) {
		const auth = isAuthenticated

		useEffect(() => {
			if (!auth) {
				return redirect('/admin/login')
			}
		}, [])

		if (!auth) {
			return null
		}

		return <Component {...props} />
	}
}
