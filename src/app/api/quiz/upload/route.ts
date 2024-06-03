import fs from 'fs'
import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'
import path from 'path'

export async function POST(request: Request) {
	const data = await request.formData()
	const file: File | null = data.get('file') as unknown as File

	if (!file) {
		return NextResponse.json({ success: false })
	}

	const directoryPathGeneral = `upload/presentation/`

	if (!fs.existsSync(directoryPathGeneral)) {
		fs.mkdirSync(directoryPathGeneral)
	}

	const fileNameExtOrg = path.extname(file.name)
	const fileName = 'presentation' + fileNameExtOrg

	const pathToSave = directoryPathGeneral + fileName

	const bytesFile = await file.arrayBuffer()
	const bufferFile = Buffer.from(bytesFile)

	writeFile(pathToSave, bufferFile)

	const res = {
		download: pathToSave,
	}

	return NextResponse.json(res)
}
