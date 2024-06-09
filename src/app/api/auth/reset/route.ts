export const dynamic = 'force-dynamic'
import { PrismaClient } from '@prisma/client'
import md5 from 'js-md5'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(request: Request) {
	const data = await request.formData()
	const currentPass: string | null = data.get(
		'oldPassword'
	) as unknown as string
	const newPassword: string | null = data.get(
		'newPassword'
	) as unknown as string
	const newPasswordConfirm: string | null = data.get(
		'confirmPassword'
	) as unknown as string

	console.log(currentPass)
	console.log(newPassword)
	console.log(newPasswordConfirm)

	const userDb = await prisma.users.findFirst({
		where: {
			user_id: 1,
		},
	})

	const md5passOld = md5(currentPass)

	if (newPassword === newPasswordConfirm) {
		if (
			userDb?.user_login === 'msk@simter.ru' &&
			userDb.user_password === md5passOld
		) {
			await prisma.users.update({
				where: {
					user_id: 1,
				},
				data: {
					user_password: md5(newPassword),
					user_hash: md5(newPassword),
				},
			})
			return NextResponse.json(true)
		}
		return NextResponse.json(false)
	} else {
		return NextResponse.json(false)
	}
}
