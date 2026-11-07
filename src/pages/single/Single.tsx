import Question, { QuestionCategory, QuestionJson, QuestionType } from './Question'
import questions from '../../../questions/question.json'
import { useState } from 'react'

const getQuestion = (category: QuestionCategory): QuestionType[] => {
  return (questions as QuestionJson)[category]
}

const Single = () => {
  const questionList = getQuestion('fund')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)

  return questionList
    .filter((_, index) => index === currentQuestionIndex)
    .map((question) => (
      <Question key={question.question} {...question} toNext={() => setCurrentQuestionIndex((prev) => prev + 1)} />
    ))
}

export default Single
