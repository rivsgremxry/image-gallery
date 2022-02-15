import React, { useState, useEffect } from 'react'
import GetImages from './GetImages'

import '././Gallery.css'

const Gallery = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://boiling-refuge-66454.herokuapp.com/images/237")
            .then((res) => res.json())
            .then(
                (data) => {
                    setData(data)
                },
                (error) => {
                    console.log(error)
                }
            );
    }, []);

    function handleData() {
        console.log("HANDLE DATA HERE!");
        if (typeof data.comments !== 'undefined') {
            for (let key of Object.keys(data.comments)) {
                return (
                    <div>
                        <h1>{data.id}</h1>
                        <h1>{data.url}</h1>
                        <h1>{data.comments[key].id}</h1>
                        <h1>{data.comments[key].date}</h1>
                        <h1>{data.comments[key].text}</h1>
                    </div>
                )
            }
        }
    }

    console.log(handleData())

    return (
        <div>
            {handleData()}
        </div>
    )
}

export default Gallery