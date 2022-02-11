import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, name }) => {
    const d = new Date();
    let date = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()
    
    return (
        <div>
            <h1>{name}</h1>
            {posts.map((post) =>
                <PostItem number={date} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;