import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number} - {props.post.name}</strong>
                <div>
                    {props.post.name}
                </div>
                <div>
                    {props.post.body}
                </div>
            </div>
        </div>
    )
}

export default PostItem;