import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const path: string | null = data.get('path') as unknown as string

	fs.rmSync(path, { recursive: true, force: true })

	return NextResponse.json('')
}
