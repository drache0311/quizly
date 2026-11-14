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
  'question-number'?: string[]
}

const Question = ({
  question,
  'question-number': questionNumber,
  options,
  answer,
  explanation,
  img,
  annotation,
}: QuestionType) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const afterClick = selectedOption !== null
  const correct = afterClick && selectedOption === answer

  return (
    <article className="question">
      {img && <img src={`/datas/img/${img}.png`} alt="" />}
      <h3>{question}</h3>
      <div className="question-number">
        {questionNumber?.map((qn) => (
          <span key={qn}>{qn}</span>
        ))}
      </div>
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
  )
}

export default Question
