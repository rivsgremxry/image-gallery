import React, { useState } from 'react';

const PostForm = ({ create }) => {

    const [post, setPost] = useState({ name: '', body: '' })

    function addNewPost(e) {
        e.preventDefault()

        if (post.body.trim() !== "") {
            const newPost = {
                ...post, id: Date.now()
            }
            create(newPost)
            setPost({ name: '', body: '' })
        }
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Name"
                value={post.name}
                onChange={e => setPost({ ...post, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Post description"
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
            />
            <button onClick={addNewPost}>Create post</button>
        </form>
    );
};

export default PostForm;