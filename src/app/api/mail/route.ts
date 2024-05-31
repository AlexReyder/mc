export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const user: string | null = data.get('username') as unknown as string
	const phone: string | null = data.get('phone') as unknown as string
	const theme: string | null = data.get('theme') as unknown as string

	const username = `<p>Имя: ${user}</p>`
	const userphone = `<p>Номер телефона: ${phone}</p>`
	const usertheme = `<p>Тема обращения: ${theme}</p>`

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

	let message = `<html>
		<head>
	 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<title>Новая заявка/title>
		</head>
		<body>`

	message += username + '<br/>' + userphone + '<br/>' + usertheme

	message += `</body>
		</html>`

	const mailOptions = {
		from: process.env.emailUser,
		to: process.env.emailUser,
		subject: 'Новая заявка',
		html: message,
	}

	transporter.sendMail(mailOptions, function (error: any, info: any) {
		if (error) {
			console.log(error)
		}
	})

	return NextResponse.json('')
}
