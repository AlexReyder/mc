export const dynamic = 'force-dynamic'
import fs from 'fs'
import { NextResponse } from 'next/server'
export async function POST(request: Request) {
	const data = await request.formData()
	const user: string | null = data.get('username') as unknown as string
	const pass: string | null = data.get('password') as unknown as string

	const passJS = fs.readFileSync('public/data/asasdqwfr.json', 'utf-8')
	const logdata = JSON.parse(passJS)
	if (logdata.asdasfg23tassf === user && logdata.tsdfsqw1324t === pass) {
		return NextResponse.json(true)
	} else {
		return NextResponse.json(false)
	}
}
