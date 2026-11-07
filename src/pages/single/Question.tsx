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

const Question = ({ question, options, answer, explanation, img, annotation }: QuestionType) => {
  return (
    <div>
      {img && <img src={`/questions/img/${img}.png`} alt="" />}
      <h3>{question}</h3>
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <span>{index + 1}</span>
            <span>{option}</span>
          </div>
        ))}
      </div>
      <div>{explanation}</div>
      {annotation && <div>{annotation}</div>}
    </div>
  )
}

export default Question
