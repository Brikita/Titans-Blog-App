import React from 'react';
import Blog from "./Blog"


export default function Profile(){
    const [blog, setBlog] = React.useState(
        JSON.parse(localStorage.getItem("blogData")) || [] );
    React.useEffect(() => {
        localStorage.setItem("blogData", JSON.stringify(blog))
        

    }, [blog])

    function newBlog() {
        const blogItem = {
            id: "",
            content: "",
            author: "",
            coverImg: "",
            time: "",
            tags: []
        }
      setBlog(prevBlog => [blogItem, ...prevBlog])  
    }
    
    //const [blogContent, setBlogContent] = React.useState(JSON.parse(localStorage.getItem("blogData")) || {newBlog})

    

    
    

    function changeContent(event) {
        const {value, name} = event.target
        setBlog(prevBlog => prevBlog.map(blogItem => {
            return {...prevBlog, content: value}
        }))
        
        console.log(blog.content)
    }


    
     

    return (
        <div>
            <Blog 
                createBlog = {newBlog}
                changeContent={changeContent}
            />
        </div>
    )
}