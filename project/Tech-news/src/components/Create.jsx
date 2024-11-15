import { useState } from "react";

function Create(){

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [image, setImage] = useState('')
    const [topic, setTopic] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, image, topic, author}
        
        fetch("https://tech-news-blog.onrender.com/blogs", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Article added")
        })
        setTitle("");
        setBody("");
        setImage("");
        setTopic("");
        setAuthor("");
    }

    return(
        <div className="create-container">
            <div className="create">
                <h2>Add An Article</h2>
                <form onSubmit={handleSubmit}>
                    <label>Title  </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <label>Content </label>
                    <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                    <label>Image Url: </label>
                    <input type="text" value={image}  onChange={(e) => setImage(e.target.value)}/>
                    <label>Topic: </label>
                    <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                        <option value="ai">Ai</option>
                        <option value="cyber security">Cyber Security</option>
                        <option value="software engineering">Software Engineering</option>
                    </select>
                    <label>Author </label>
                    <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                        <option value="Jane">Jane</option>
                        <option value="John">John</option>
                        <option value="James">James</option>
                        <option value="Sharon">Sharon</option>
                    </select>
                    <button>Post</button>
                </form>
            </div>
        </div>
    )
}

export default Create;
