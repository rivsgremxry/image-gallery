import React, { useState, useEffect } from "react";
import "./Modal.css";
import { Container, Row, Col } from 'react-bootstrap'
import PostForm from './PostForm'

export default function Modal({ setModalOpen, postId }) {

    const [data, setData] = useState([]);

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

    function handleComments() {
        if (typeof data.comments !== 'undefined') {
            for (let key of Object.keys(data.comments)) {
                var d = new Date(data.comments[key].date);
                let myDate = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()
                return (
                    <Col md={4} className="commentsCol">
                        <p>{myDate}</p>
                        <p>{data.comments[key].text}</p>
                    </Col>
                )
            }
        }
    }

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
                    {handleComments()}
                </Row>
                <Row className="postRow">
                    <Col md={{ span: 7, offset: 0 }}>
                        <PostForm postId={postId} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}