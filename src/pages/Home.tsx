import { Link } from 'react-router'

const Home = () => {
  return (
    <div className="home">
      임전무퇴
      <Link to="/single-question">문제 풀기</Link>
      <Link to="/single-keyword">단어 하나씩 보기</Link>
      <Link to="/all-keyword">모든 단어 보기</Link>
    </div>
  )
}

export default Home
