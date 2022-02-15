import React, { useState, useEffect } from 'react'
import GetImages from './GetImages'

import '././Gallery.css'

const Gallery = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://boiling-refuge-66454.herokuapp.com/images/240")
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
        if (typeof data.comments !== 'undefined') {
            for (let key of Object.keys(data.comments)) {
                var d = new Date(data.comments[key].date);
                console.log(d)
                let myDate = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()


                return (
                    <div>
                        {/* <h1>{data.id}</h1> */}
                        {/* <h1>{data.url}</h1> */}
                        <img
                            src={data.url}
                            alt={'image' + data.id}
                            style={{ width: '50%' }}
                        />
                        <h1>{data.comments[key].id}. {myDate}</h1>
                        {/* <h1>{data.comments[key].id}. {data.comments[key].date}</h1> */}
                        {/* <h1>{data.comments[key].date}</h1> */}
                        <h1>{data.comments[key].text}</h1>
                    </div>
                )
            }
        }
        if (!!data.comments) {
            return (
                <div>
                    <img
                        src={data.url}
                        alt={'image' + data.id}
                        style={{ width: '50%' }}
                    />
                </div>
            )
        }
    }

    return (
        <div>
            {handleData()}
        </div>
    )
}

export default Gallery