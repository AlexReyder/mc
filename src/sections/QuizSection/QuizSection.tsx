'use client'
import { quizData } from '@/shared/data/quiz'
import { Container } from '@/shared/ui/Layout/Container/Container'
import { Section } from '@/shared/ui/Layout/Section/Section'
import { Quiz } from '@/widgets/Quiz'

const QuizSection = () => {
	return (
		<Section id='quiz'>
			<Container>
				<Quiz data={quizData} />
			</Container>
		</Section>
	)
}
export default QuizSection
