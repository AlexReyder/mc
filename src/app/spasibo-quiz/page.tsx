import ThankSection from '@/sections/ThankSection/ThankSection'
import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'

export default function SpasiboQuiz() {
	return (
		<main>
			<Header />
			<ThankSection
				titleLink='Скачать презентацию'
				link='/upload/presentation/presentation.pdf'
				download={true}
			/>
			<Footer />
		</main>
	)
}
