import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] =useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    },[])
    return (
        <div>
            <h2>All post are here </h2>
            {
                posts.map(post => <Post
                    key = {post.id}
                    post = {post}
                ></Post>)
                
            }
        </div>
    );
};

export default Posts;