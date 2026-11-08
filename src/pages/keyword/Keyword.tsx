interface KeywordType {
  keyword: string
  meaning: string
}

const Keyword = ({ keyword, meaning }: KeywordType) => {
  return (
    <div className="keyword">
      <span>{keyword}</span>
      <span>:</span>
      <span>{meaning}</span>
    </div>
  )
}

export default Keyword
