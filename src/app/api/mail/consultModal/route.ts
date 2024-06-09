export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const user: string | null = data.get('username') as unknown as string
	const phone: string | null = data.get('phone') as unknown as string

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

	let message = 'Имя: ' + user + '\n' + 'Номер телефона: ' + phone

	const mailOptions = {
		from: process.env.emailUser,
		to: process.env.emailUser,
		subject: 'Полимерный микроцемент заявка',
		text: message,
	}

	transporter.sendMail(mailOptions, function (error: any, info: any) {
		if (error) {
			console.log(error)
		}
	})

	return NextResponse.json('')
}
