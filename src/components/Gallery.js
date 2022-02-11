import React, { useState } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import '././Gallery.css'
import { Modal } from 'react-bootstrap'

const Gallery = () => {

    let data = [
        { "id": 237, "url": "https://picsum.photos/id/237/300/200" },
        { "id": 238, "url": "https://picsum.photos/id/238/300/200" },
        { "id": 239, "url": "https://picsum.photos/id/239/300/200" },
        { "id": 240, "url": "https://picsum.photos/id/240/300/200" },
        { "id": 241, "url": "https://picsum.photos/id/241/300/200" },
        { "id": 242, "url": "https://picsum.photos/id/242/300/200" }
    ]

    const [posts, setPosts] = useState([
        { "id": 1, "name": "Name1", "body": "Test1" },
        { "id": 2, "name": "Name2", "body": "Test2" },
        { "id": 3, "name": "Name3", "body": "Test3" }
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const [tempUrl, setTempUrl] = useState('')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getImage = (url) => {
        setTempUrl(url)
        handleShow()
    }

    return (
        <>
            {/* <PostForm create={createPost} /> */}
            {/* <PostList posts={posts} /> */}

            <Modal show={show} onHide={handleClose} className='modal' centered size="lg">
                <Modal.Body className='modal-body'>
                    <img src={tempUrl} alt={tempUrl} />
                    <PostList posts={posts} />
                    <PostForm create={createPost} />
                </Modal.Body>
            </Modal>

            <div className='gallery'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='picture' key={index}>
                                <img
                                    src={item.url}
                                    alt={'image' + index}
                                    style={{ width: '100%' }}
                                    onClick={() => getImage(item.url)}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Gallery