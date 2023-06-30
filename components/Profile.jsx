import React from 'react';
import Blog from "./Blog"


export default function Profile(){



    const [blog, setBlog] = React.useState({
        id: "",
        content: "",
        author: "",
        coverImg: "",
        time: "",
        tags: []
    });

     

    return (
        <div>
            <Blog />
        </div>
    )
}