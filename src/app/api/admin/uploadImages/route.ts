import fs from 'fs'
import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'
import path from 'path'

export async function POST(request: Request) {
	const data = await request.formData()
	const image: File | null = data.get('file') as unknown as File
	const folderName = data.get('folderName') as unknown as string
	const objectType = data.get('objectType') as unknown as string

	if (!image) {
		return NextResponse.json({ success: false })
	}

	const bytesImage = await image.arrayBuffer()
	const bufferImage = Buffer.from(bytesImage)

	const directoryPathGeneral = `upload/products/${objectType}`
	const directoryPathOriginal = `upload/products/${objectType}/${folderName}`

	if (!fs.existsSync(directoryPathGeneral)) {
		fs.mkdirSync(directoryPathGeneral)
	}
	if (!fs.existsSync(directoryPathOriginal)) {
		fs.mkdirSync(directoryPathOriginal)
	}

	const fileName = folderName + '_object'
	const fileNameExtOrg = path.extname(image.name)

	const originalFilePath =
		directoryPathOriginal + `/${fileName}.${fileNameExtOrg}`
	writeFile(originalFilePath, bufferImage)
	const sharp = require('sharp')

	const webpFilePath = directoryPathOriginal + `/${fileName}.webp`

	sharp(bufferImage)
		.webp({
			quality: 80,
		})
		.toFile(webpFilePath)

	const res = {
		type: 'object',
		images: ['/' + originalFilePath, '/' + webpFilePath],
	}

	return NextResponse.json(res)
}
