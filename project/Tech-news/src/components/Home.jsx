import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://tech-news-blog.onrender.com/blogs')

  return (
    <div className="home">
      <h1>All News</h1><br /><br />
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <ArticleList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;