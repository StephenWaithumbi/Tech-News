import ArticleList from "./ArticleList";
import useFetch from "./useFetch";

const CyberSecurity = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:3000/blogs');

  const cyberSecurity = blogs ? blogs.filter(blog => blog.topic === "cyber security") : [];

  return (
    <div className="home">
      <h1>Cyber Security</h1><br /> <br />
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <ArticleList blogs={cyberSecurity} /> }
    </div>
  );
};

export default CyberSecurity;
