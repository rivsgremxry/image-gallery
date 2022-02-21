import React, { useState, useEffect } from "react";

// Бустрап элементы
import { Container, Row, Col } from 'react-bootstrap';

// Компоненты
import PostForm from './PostForm';
import Comments from "./Comments";

export default function Modal({ setModalOpen, postId }) {

    const [data, setData] = useState([]);

    // Получение изображений по идентификатору
    useEffect(() => {
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${postId}`)
            .then((res) => res.json())
            .then(
                (data) => {
                    setData(data)
                },
                (error) => {
                    console.log(error)
                }
            );
    }, [postId]);

    // Модальное окно с изображениями, комментариями и формой для создания комментария
    return (
        <div className="modal_background">
            <Container className="modalContainer">
                <div className="modal_close">
                    <button onClick={() => { setModalOpen(false); }} > X </button>
                </div>
                <Row className="imageRow">
                    <Col md={7}>
                        {data.url
                            ? <img className="post_image" src={data.url} alt={'image' + data.id} />
                            : <span>Loading....</span>
                        }
                    </Col>
                    { data.comments  && <Comments comments={ data.comments } /> }
                </Row>
                <Row className="postRow">
                    <Col md={{ span: 7, offset: 0 }}>
                        <PostForm postId={postId} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}