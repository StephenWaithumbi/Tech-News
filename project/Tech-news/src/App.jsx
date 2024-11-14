import ArticleDetails from './components/ArticleDetails'
import NavBar from './components/NavBar'
import ArticleItem from './components/ArticleItem'
import ArticleList from './components/ArticleList'
import Home from './components/Home'


function App() {
  const title = "welcome to new blog"
  const likes = 5;
  return (
    <>
      <NavBar/>
      <div className='content'>        
        <h1><Home/></h1>
      </div>
    </>
  )
}

export default App
