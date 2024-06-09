export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const user: string | null = data.get('username') as unknown as string
	const phone: string | null = data.get('phone') as unknown as string
	const quiz = data.get('quiz') as unknown as string
	const quizItems = JSON.parse(quiz)

	let quizRes = ''
	quizItems.forEach((el: any) => {
		quizRes += el.question + ' - ' + el.answer + '\n'
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

	let message =
		'Имя: ' + user + '\n' + 'Номер телефона: ' + phone + '\n' + quizRes

	const mailOptions = {
		from: process.env.emailUser,
		to: process.env.emailUser,
		subject: 'Полимерный микроцемент квиз',
		text: message,
	}

	transporter.sendMail(mailOptions, function (error: any, info: any) {
		if (error) {
			console.log(error)
		}
	})

	return NextResponse.json('')
}
