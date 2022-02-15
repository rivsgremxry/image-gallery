import React, { useState, useEffect } from 'react'
import GetImages from './GetImages'
import axios from 'axios'

import '././Gallery.css'

const Gallery = () => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch("https://boiling-refuge-66454.herokuapp.com/images/237")
            .then((res) => res.json())
            .then(
                (comments) => {
                    setComments(comments);
                },
                (error) => {
                    console.log(error);
                }
            );
    }, []);
    
    console.log(JSON.stringify(comments))

    return (
        <>
            {/* <GetImages /> */}
            <div>
                {
                    comments.map((item) => {
                        return (
                            <h1>{item.id}</h1>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Gallery