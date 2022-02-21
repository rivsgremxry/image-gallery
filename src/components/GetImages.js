import React, { useState, useEffect } from "react"

// Компонент
import Modal from "./Modal";

// Стили
import '././Gallery.css'

const GetItem = () => {

  // Получение "обычных" изображений
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://boiling-refuge-66454.herokuapp.com/images/")
      .then((res) => res.json())
      .then(
        (images) => {
          setImages(images);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  // Modal
  const [modalOpen, setModalOpen] = useState(false)
  const [currentPostId, setPostId] = useState(null)

  function handleModal(id) {
    setModalOpen(true)
    setPostId(id)
  }

  return (
    <div className="App">
      <div className="gallery">
        {
          images.map((item) => {
            return (
              <div className="picture" key={item.id}>
                <img
                  src={item.url}
                  alt={'image' + item.id}
                  style={{ width: '100%' }}
                  onClick={() => handleModal(item.id)}
                />
              </div>
            )
          })
        }
        {modalOpen && <Modal setModalOpen={setModalOpen} postId={currentPostId} />}
      </div>
    </div>
  );

}

export default GetItem