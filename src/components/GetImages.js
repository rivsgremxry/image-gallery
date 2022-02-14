import React, { useState, useEffect, useRef } from "react";

import { Modal } from 'react-bootstrap'

const GetItem = () => {
  

  // data = "https://boiling-refuge-66454.herokuapp.com/images/"
  // x = setID
  // y = data + setID
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

  const [show, setShow] = useState(false);
  function GetImageId(id) {
    console.log(id)
    handleShow()
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <>
      <Modal show={show} onHide={handleClose} className='modal' centered size="lg">
        <Modal.Body className='modal-body'>
        </Modal.Body>
      </Modal>
      <div className="gallery">
        {
          images.map((item) => {
            return (
              <div className="picture" key={item.id}>
                <img
                  src={item.url}
                  alt={'image' + item.id}
                  style={{ width: '100%' }}
                  onClick={() => GetImageId(item.id)}
                />
              </div>
            )
          })
        }
      </div>
      </>
    </div>
  );
}

export default GetItem