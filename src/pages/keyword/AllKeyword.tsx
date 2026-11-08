import { getKeyword } from './SingleKeyword'
import Keyword from './Keyword'
import Move from '../../navigator/Move'

const AllKeyword = () => {
  const keywordList = getKeyword('fund')

  return (
    <div className="keyword-container">
      {Object.entries(keywordList).map(([key, value]) => (
        <Keyword key={key} keyword={key} meaning={value} />
      ))}
      <Move hasNext={false} hasPrevious={false} onNext={() => {}} onPrevious={() => {}} />
    </div>
  )
}

export default AllKeyword
