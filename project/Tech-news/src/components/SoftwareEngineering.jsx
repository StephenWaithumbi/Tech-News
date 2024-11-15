import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

const SoftwareEngineering = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:3000/blogs');

  // Filter blogs to include only those with the topic "ai"
  const softwareBlogs = blogs ? blogs.filter(blog => blog.topic === "software engineering") : [];

  return (
    <div className="home">
      <h1>Software Engineering News</h1><br /><br />
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <ArticleList blogs={softwareBlogs} /> }
    </div>
  );
};

export default SoftwareEngineering;
