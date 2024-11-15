import { Link } from 'react-router-dom';

const ArticleList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>          
            <img src={blog.image}  style={{maxWidth: "200 px", maxHeight: "200px"}} /> 
            <h2>{ blog.title }</h2>           
            <p>Written by { blog.author }</p>
            <p>Topic : {blog.topic}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default ArticleList;