import React from 'react';


export default function Blog(props) {
    /* const newBlog = {
        id: "",
        content: "",
        author: "",
        coverImg: "",
        time: "",
        tags: []
    } */
    


    
    return (
        <div className='blog-container'>
            <fieldset>
                <legend>Write a new blog</legend>
                <textarea type="text" className='blog-input' placeholder='Write your Blog here' name='content' onChange={props.changeContent} value={blog[0].content}/>

                <button className='blog-post-btn'>Post Blog</button>
            </fieldset>
        </div>
    )
}