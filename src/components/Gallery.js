import React, { useState } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'
import '././Gallery.css'
import { Modal } from 'react-bootstrap'

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            galleryItems: [
                { "id": 237, "url": "https://picsum.photos/id/237/300/200" },
                { "id": 238, "url": "https://picsum.photos/id/238/300/200" },
                { "id": 239, "url": "https://picsum.photos/id/239/300/200" },
                { "id": 240, "url": "https://picsum.photos/id/240/300/200" },
                { "id": 241, "url": "https://picsum.photos/id/241/300/200" },
                { "id": 242, "url": "https://picsum.photos/id/242/300/200" }
            ],
            postComments: [
                {
                    item_id: 237, comments: [
                        { id: 1, name: "Name1", body: "Test1" },
                        { id: 2, name: "Name2", body: "Test2" },
                    ]
                },
                {
                    item_id: 238, comments: [
                        { id: 3, name: "Name3", body: "Test3" },
                        { id: 4, name: "Name4", body: "Test4" }
                    ]
                },
                {
                    item_id: 239, comments: [
                        { id: 5, name: "Name5", body: "Test5" },
                        { id: 6, name: "Name6", body: "Test6" }
                    ]
                },
                {
                    item_id: 240, comments: [
                        { id: 7, name: "Name7", body: "Test7" },
                        { id: 8, name: "Name8", body: "Test8" }
                    ]
                },
                {
                    item_id: 241, comments: [
                        { id: 9, name: "Name9", body: "Test9" },
                        { id: 10, name: "Name10", body: "Test10" }
                    ]
                },
                {
                    item_id: 242, comments: [
                        { id: 11, name: "Name11", body: "Test11" },
                        { id: 12, name: "Name12", body: "Test12" }
                    ]
                },
            ],
            showModal: false,
            current_post_id: "",
            current_post_url: "",
            current_comments: []
        }

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

    }


    showModal = () => {
        this.setState({ showModal: true });
    }

    hideModal = () => {
        this.setState({ showModal: false });
    }

    handleModal = (id, url) => {
        this.setState({ showModal: true });
        this.setState({ current_post_id: id });
        this.setState({ current_post_url: url });

        let postComments = this.state.postComments.filter(function (el) {
            return el.item_id === id
        })

        console.log(id);
        // console.log(postComments);

        this.setState({ current_comments: postComments });
    }

    render() {
        const { galleryItems } = this.state;
        const { current_comments } = this.state

        return (
            <React.Fragment>
                <div className="gallery">
                    {galleryItems.map((item, index) => {
                        return (
                            <div className="picture" key={index}>
                                <img
                                    src={item.url}
                                    alt={"image" + index}
                                    style={{ width: "100%" }}
                                    onClick={() => this.handleModal(item.id, item.url)}
                                />
                            </div>
                        );
                    })}
                </div>

                <Modal
                    show={this.state.showModal}
                    onHide={this.hideModal}
                    className="modal"
                    centered
                    size="lg"
                >
                    <Modal.Body className="modal-body">
                        <img src={this.state.current_post_url} alt={this.state.current_post_url} />

                        <div>
                            {current_comments.map((comments) => {
                                return (
                                    <h1 key={comments.item_id}>{comments.comments[0].name} - {comments.comments[0].body}</h1>
                                )
                            })}
                        </div>

                    </Modal.Body>
                </Modal>
            </React.Fragment>
        );
    }

}

// const Gallery = () => {

//     // Массив с изображениями
//     let data = [
//         { "id": 237, "url": "https://picsum.photos/id/237/300/200" },
//         { "id": 238, "url": "https://picsum.photos/id/238/300/200" },
//         { "id": 239, "url": "https://picsum.photos/id/239/300/200" },
//         { "id": 240, "url": "https://picsum.photos/id/240/300/200" },
//         { "id": 241, "url": "https://picsum.photos/id/241/300/200" },
//         { "id": 242, "url": "https://picsum.photos/id/242/300/200" }
//     ]

//     // Список комментариев
//     const [posts, setPosts] = useState([
//         { "id": 1, "name": "Name1", "body": "Test1" },
//         { "id": 2, "name": "Name2", "body": "Test2" },
//         { "id": 3, "name": "Name3", "body": "Test3" }
//     ])

//     // Создание комментария
//     const createPost = (newPost) => {
//         setPosts([...posts, newPost])
//     }

//     // Для того, чтобы открыть "копию" картинки в модальном окне
//     const [tempUrl, setTempUrl] = useState('')
//     const [show, setShow] = useState(false);
//     const getImage = (url) => {
//         setTempUrl(url)
//         handleShow()
//     }

//     // Модальное окно
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             {/* <PostForm create={createPost} /> */}
//             {/* <PostList posts={posts} /> */}

//             {/* Модальное окно с картинкой, списком комментариев и формой для создания комментариев */}
//             <Modal show={show} onHide={handleClose} className='modal' centered size="lg">
//                 <Modal.Body className='modal-body'>
//                     <img src={tempUrl} alt={tempUrl} />
//                     <PostList posts={posts} />
//                     <PostForm create={createPost} />
//                 </Modal.Body>
//             </Modal>

//             {/* Галерея изображений */}
//             <div className='gallery'>
//                 {
//                     data.map((item, index) => {
//                         return (
//                             <div className='picture' key={index}>
//                                 <img
//                                     src={item.url}
//                                     alt={'image' + index}
//                                     style={{ width: '100%' }}
//                                     onClick={() => getImage(item.url)}
//                                 />
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

// export default Gallery