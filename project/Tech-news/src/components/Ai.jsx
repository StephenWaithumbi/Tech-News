import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

const Ai = () => {
  const { error, isPending, data: blogs } = useFetch('https://tech-news-blog.onrender.com/blogs');

    const aiBlogs = blogs ? blogs.filter(blog => blog.topic === "ai") : [];

  return (
    <div className="home">
      <h1>Ai News</h1><br /><br />
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <ArticleList blogs={aiBlogs} /> }
    </div>
  );
};

export default Ai;
