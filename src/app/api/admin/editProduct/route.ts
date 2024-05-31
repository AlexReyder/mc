export const dynamic = 'force-dynamic'
import fs from 'fs'
import { NextResponse } from 'next/server'
import { productItemI } from '../saveOrder/route'

export async function POST(request: Request) {
	const data = await request.formData()
	const res: string | null = data.get('data') as unknown as string
	const newProduct: productItemI = JSON.parse(res)

	const AllProductsJSON = fs.readFileSync('public/data/products.json', 'utf-8')
	const products: productItemI[] = JSON.parse(AllProductsJSON)

	const index = products.findIndex(
		arr => arr.type == newProduct.type && arr.id == newProduct.id
	)
	products[index] = newProduct

	let result = JSON.stringify(products)
	fs.writeFileSync('public/data/products.json', result)

	return NextResponse.json('')
}
