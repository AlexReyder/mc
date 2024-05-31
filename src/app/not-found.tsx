import { NotFoundSection } from '@/sections/NotFoundSection/NotFoundSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export default function Custom404() {
	return (
		<main>
			<Header />
			<NotFoundSection />
			<Footer />
		</main>
	)
}
