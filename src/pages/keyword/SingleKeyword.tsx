import keywords from '../../../datas/keyword.json'
import { shuffle } from '../../utils/random'
import Keyword from './Keyword'
import { useMemo, useState } from 'react'
import Move from '../../navigator/Move'

type KeywordCategory = 'fund'

type KeywordJson = Record<KeywordCategory, KeywordType>

type KeywordType = Record<string, string>

export const getKeyword = (category: KeywordCategory): KeywordType => {
  return (keywords as unknown as KeywordJson)[category]
}

const SingleKeyword = () => {
  const keywordList = getKeyword('fund')
  const [currentIndex, setCurrentIndex] = useState<number>(0)

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

  const shuffledList = useMemo(() => shuffle(Object.entries(keywordList)), [keywordList])

  return (
    <div className="keyword-container">
      {shuffledList
        .filter((_, index) => index === currentIndex)
        .map(([key, value]) => (
          <Keyword key={key} keyword={key} meaning={value} />
        ))}
      <Move
        hasNext={currentIndex !== Object.entries(keywordList).length - 1}
        hasPrevious={currentIndex !== 0}
        onNext={() => move('next')}
        onPrevious={() => move('prev')}
      />
    </div>
  )
}

export default SingleKeyword
