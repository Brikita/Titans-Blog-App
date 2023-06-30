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
        <div>
            <div className='blog-container'>
            
                <fieldset>
                    
                    <legend>Write a new blog</legend>
                    <textarea type="text" className='blog-input' placeholder='Write your Blog here' name='content' onChange={props.changeContent} value={props.currentBlog.content} />

                    <button className='blog-post-btn' onClick={props.post}> Post Blog </button>
                </fieldset>
            </div>
            <div className="my-posts">
                <h2>My Posts</h2>
                <p id='blog-post' ></p>
            </div>
        </div>
    )
}