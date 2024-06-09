export const dynamic = 'force-dynamic'
import { PrismaClient } from '@prisma/client'
import md5 from 'js-md5'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()
export async function POST(request: Request) {
	const data = await request.formData()
	const user: string | null = data.get('username') as unknown as string
	const pass: string | null = data.get('password') as unknown as string

	const userDb = await prisma.users.findFirst({
		where: {
			user_login: user,
		},
	})

	const md5pass = md5(pass)

	if (userDb?.user_login === user && userDb.user_password === md5pass) {
		return NextResponse.json(true)
	} else {
		return NextResponse.json(false)
	}
}
