export const dynamic = 'force-dynamic'
import { PrismaClient } from '@prisma/client'
import md5 from 'js-md5'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: Request) {
	const newPass = Math.random().toString(36).slice(-8)
	const md5passNew = md5(newPass)

	const userDb = await prisma.users.update({
		where: {
			user_id: 1,
		},
		data: {
			user_password: md5passNew,
			user_hash: md5passNew,
		},
	})

	const nodemailer = require('nodemailer')

	const transporter = nodemailer.createTransport({
		host: 'smtp.beget.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.emailUser,
			pass: process.env.emailPass,
		},
	})

	let message = 'Новый пароль: ' + newPass

	const mailOptions = {
		from: process.env.emailUser,
		to: process.env.emailUser,
		subject: 'Восстановление пароля для Полимерного микроцемента',
		text: message,
	}

	transporter.sendMail(mailOptions, function (error: any, info: any) {
		if (error) {
			console.log(error)
			return NextResponse.json(false)
		}
	})

	return NextResponse.json(true)
}
