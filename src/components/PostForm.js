import React, { useState } from 'react'

export default function PostForm({ postId }) {

    const [username, setUsername] = useState("")
    const [comment, setComment] = useState("")

    const handleUsername = (event) => setUsername(event.target.value)
    const handleComment = (event) => setComment(event.target.value)

    function handleSubmit(e) {
        e.preventDefault()

        // console.log("handling submit!");

        const requestParams = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: username, comment: comment })
        }

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${postId}/comments`, requestParams)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
                console.log(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            })

            setComment('')
            setUsername('')

    }

    return (
        <form className="post_form" onSubmit={handleSubmit} >
            <input className='inputs' type="text" placeholder="Ваше имя" id="username" value={username} onChange={handleUsername} />
            <input className='inputs' type="text" placeholder="Ваш комментарий" id="comment" value={comment} onChange={handleComment} />
            <button className='inputs' disabled={!username || !comment} type="submit" onChange={handleSubmit}>Оставить комментарий</button>
        </form>
    )
}