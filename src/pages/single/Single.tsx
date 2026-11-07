import Question, { QuestionCategory, QuestionJson, QuestionType } from './Question'
import questions from '../../../questions/question.json'

const getQuestion = (category: QuestionCategory): QuestionType[] => {
  return (questions as QuestionJson)[category]
}

const Single = () => {
  const questionList = getQuestion('fund')

  return questionList.map((question) => <Question key={question.question} {...question} />)
}

export default Single
