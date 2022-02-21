import React from "react";

// Бустрап элементы
import { Col } from 'react-bootstrap';

export default function Comments(comments) {

    if (typeof comments.comments !== 'undefined') {
        return (
            comments.comments.map(({ id, text, date }) => {
                let d = new Date(date);
                let myDate = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
                return (
                    <Col md={4} className="commentsCol" key={id}>
                        <p>{myDate}</p>
                        <p>{text}</p>
                    </Col>
                )
            })
        )
    }
}