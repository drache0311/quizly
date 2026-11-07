import { useState } from 'react'

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

const Question = ({
  question,
  options,
  answer,
  explanation,
  img,
  annotation,
  toNext,
}: QuestionType & { toNext: () => void }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const beforeClick = selectedOption !== null

  return (
    <div>
      <article>
        {img && <img src={`/questions/img/${img}.png`} alt="" />}
        <h3>{question}</h3>
        <div>
          {options.map((option, index) => (
            <button key={index} disabled={beforeClick} onClick={() => setSelectedOption(index + 1)}>
              <span>{index + 1}</span>
              <span>{option}</span>
            </button>
          ))}
        </div>
        <div>{beforeClick && selectedOption !== answer && explanation}</div>
        <div>{beforeClick && selectedOption !== answer && answer}</div>
        {annotation && <div>{annotation}</div>}
      </article>
      <button onClick={toNext}>Next</button>
    </div>
  )
}

export default Question
