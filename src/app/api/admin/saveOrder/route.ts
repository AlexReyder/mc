import fs from 'fs'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const data = await request.formData()

	const deleted: string = data.get('delete') as unknown as string
	const deletedItems: productItemI[] = JSON.parse(deleted)

	const order: string = data.get('order') as unknown as string
	const orderItems: productItemI[] = JSON.parse(order)

	if (deletedItems.length > 0) {
		deletedItems.forEach(item => {
			const productType = item.type
			const productName = item.id

			fs.rmSync(`upload/products/${productType}/${productName}`, {
				recursive: true,
				force: true,
			})
		})
	}

	const AllProductsJSON = fs.readFileSync('public/data/products.json', 'utf-8')
	const products = JSON.parse(AllProductsJSON)

	const goodData = products.filter(el => el.type !== orderItems[0].type)
	const good = goodData.concat(orderItems)
	let result = JSON.stringify(good)

	fs.writeFileSync('public/data/products.json', result)

	return NextResponse.json('')
}

export interface productItemI {
	id: number
	type: string
	name: string
	price: string
	priceColor: string
	description: string
	size: string
	pallet: string
	colors: any
	images: any
	slug: string
}
