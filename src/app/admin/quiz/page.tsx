'use client'
import isAuth from '@/admin-scenes/isAuth '

import QuizAdm from '@/admin-scenes/quiz/quiz'
const AdminQuiz = () => {
	return <QuizAdm />
}
export default isAuth(AdminQuiz)
