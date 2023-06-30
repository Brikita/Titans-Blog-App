import React from 'react';


export default function Blog() {

    
    return (
        <div className='blog-container'>
            <fieldset>
                <legend>Write a new blog</legend>
                <input type="text" className='blog-input' placeholder='Write your Blog here' name='content'/>

                <button className='blog-post-btn'>Post</button>
            </fieldset>
        </div>
    )
}