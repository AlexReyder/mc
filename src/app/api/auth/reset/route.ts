export const dynamic = 'force-dynamic'
import fs from 'fs'
import { NextResponse } from 'next/server'
export async function POST(request: Request) {
	const data = await request.formData()
	const pass: string | null = data.get('newPassword') as unknown as string
	console.log(data)
	console.log(pass)
	const passJS = fs.readFileSync('public/data/asasdqwfr.json', 'utf-8')
	const logdata = JSON.parse(passJS)

	logdata.tsdfsqw1324t = pass
	fs.writeFileSync('public/data/asasdqwfr.json', JSON.stringify(logdata))
	console.log('HHHHHHHHHHHHHHEEEE')
	return NextResponse.json(true)
}
