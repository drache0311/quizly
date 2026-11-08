import Question, { QuestionCategory, QuestionJson, QuestionType } from './Question'
import questions from '../../../questions/question.json'
import { useState } from 'react'

const shuffle = <T,>(array: T[]): T[] => {
  const result = [...array]

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }

  return result
}

const getQuestion = (category: QuestionCategory): QuestionType[] => {
  return (questions as QuestionJson)[category]
}

const Single = () => {
  const questionList = getQuestion('fund')
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0)

  return shuffle(questionList)
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
