import { useState, useEffect } from "react";
import BlogList from "./BlogList";

function Home(){
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
        fetch("http://localhost:3000/blogs")
        .then(res => res.json())
        .then(data => setBlogs(data))
        setIsPending(false)  
        .catch(err => console.log(err.message))
        },0)      
    }, []);
    
    return(
        <div className="home">
            {isPending && <div>loading...</div>}               
            {blogs && <BlogList blogs={blogs} title= "Trending News"/>}            
        </div>
    );
}

export default Home;