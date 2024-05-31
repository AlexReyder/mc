export const dynamic = 'force-dynamic'
import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()
	const res: string | null = data.get('data') as unknown as string
	const newProduct = JSON.parse(res)
	const AllProductsJSON = fs.readFileSync('public/data/products.json', 'utf-8')

	const products = JSON.parse(AllProductsJSON)
	products.push(newProduct)

	let result = JSON.stringify(products)
	fs.writeFileSync('public/data/products.json', result)

	return NextResponse.json('')
}
