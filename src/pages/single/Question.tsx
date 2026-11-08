import { useState } from 'react'
import classNames from 'classnames'

export type QuestionCategory = 'fund'

export type QuestionJson = Record<QuestionCategory, QuestionType[]>

export interface QuestionType {
  question: string
  options: string[]
  answer: number
  explanation: string
  img?: string
  annotation?: string
}

interface Navigator {
  move: (direction: 'prev' | 'next') => void
  hasPrevious: boolean
  hasNext: boolean
}

const Question = ({
  question,
  options,
  answer,
  explanation,
  img,
  annotation,
  move,
  hasPrevious,
  hasNext,
}: QuestionType & Navigator) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const afterClick = selectedOption !== null
  const correct = afterClick && selectedOption === answer

  return (
    <div className="question-container">
      <article className="question">
        {img && <img src={`/questions/img/${img}.png`} alt="" />}
        <h3>{question}</h3>
        <div className="options">
          {options.map((option, index) => (
            <button
              key={index}
              disabled={afterClick}
              className={classNames('option', {
                idle: !afterClick,
                answer: correct && selectedOption === index + 1,
                wrong: !correct && answer === index + 1,
              })}
              onClick={() => setSelectedOption(index + 1)}
            >
              <span>{index + 1}</span>
              <span>{option}</span>
            </button>
          ))}
        </div>
        <div className="explanation">{afterClick && `👉 ${explanation}`}</div>
        <div className="annotation">{annotation && `👀 ${annotation}`}</div>
      </article>
      {hasPrevious && (
        <button className="navigator" onClick={() => move('prev')}>
          Previous
        </button>
      )}
      {hasNext && (
        <button className="navigator" onClick={() => move('next')}>
          Next
        </button>
      )}
    </div>
  )
}

export default Question
