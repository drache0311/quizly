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
      <Question
        key={question.question}
        {...question}
        move={(direction) => {
          switch (direction) {
            case 'next':
              setCurrentQuestionIndex((prev) => prev + 1)
              break
            case 'prev':
              setCurrentQuestionIndex((prev) => prev - 1)
              break
          }
        }}
        hasNext={currentQuestionIndex !== questionList.length - 1}
        hasPrevious={currentQuestionIndex !== 0}
      />
    ))
}

export default Single
