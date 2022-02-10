import React, { useState } from 'react'
import '././Gallery.css'

const Gallery = () => {

    let data = [
        { "id": 237, "url": "https://picsum.photos/id/237/300/200" },
        { "id": 238, "url": "https://picsum.photos/id/238/300/200" },
        { "id": 239, "url": "https://picsum.photos/id/239/300/200" },
        { "id": 240, "url": "https://picsum.photos/id/240/300/200" },
        { "id": 241, "url": "https://picsum.photos/id/241/300/200" },
        { "id": 242, "url": "https://picsum.photos/id/242/300/200" }
    ]

    const [modal, setModal] = useState(false)
    const [tempUrl, setTempUrl] = useState('')

    const getImage = (url) => {
        console.warn(url);
        setTempUrl(url)
        setModal(true)
    }

    return (
        <>
            <div className={modal ? "modal open" : "modal"}>
                <img src={tempUrl} alt={tempUrl} />
            </div>
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