import ThankSection from '@/sections/ThankSection/ThankSection'

export default function SpasiboQuiz() {
	return (
		<main>
			<ThankSection
				titleLink='Скачать презентацию'
				link='/dow'
				download={true}
			/>
		</main>
	)
}
