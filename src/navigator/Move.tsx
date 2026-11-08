import { Link } from 'react-router'

const Move = ({
  hasNext,
  hasPrevious,
  onNext,
  onPrevious,
}: {
  hasNext: boolean
  hasPrevious: boolean
  onNext: () => void
  onPrevious: () => void
}) => {
  return (
    <div className="navigator">
      <div className="previous">{hasPrevious && <button onClick={onPrevious}>Previous</button>}</div>
      <div className="home">
        <Link to="/">Home</Link>
      </div>
      <div className="next">{hasNext && <button onClick={onNext}>Next</button>}</div>
    </div>
  )
}

export default Move
