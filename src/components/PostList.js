import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts }) => {
    return (
        <div>
            {posts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;