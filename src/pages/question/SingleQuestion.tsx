import Question, { QuestionCategory, QuestionJson, QuestionType } from './Question'
import questions from '../../../datas/question.json'
import { useMemo, useState } from 'react'
import { shuffle } from '../../utils/random'
import Move from '../../navigator/Move'

const getQuestion = (category: QuestionCategory): QuestionType[] => {
  return (questions as QuestionJson)[category]
}

const SingleQuestion = () => {
  const questionList = getQuestion('fund')
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const shuffledList = useMemo(() => shuffle(questionList), [questionList])

  const move = (direction: 'next' | 'prev') => {
    switch (direction) {
      case 'next':
        setCurrentIndex((prev) => prev + 1)
        break
      case 'prev':
        setCurrentIndex((prev) => prev - 1)
        break
    }
  }

  return (
    <div className="question-container">
      {shuffledList
        .filter((_, index) => index === currentIndex)
        .map((question) => (
          <Question key={question.question} {...question} />
        ))}
      <Move
        hasNext={currentIndex !== questionList.length - 1}
        hasPrevious={currentIndex !== 0}
        onNext={() => move('next')}
        onPrevious={() => move('prev')}
      />
    </div>
  )
}

export default SingleQuestion
