import React, { useState, useEffect } from "react";

import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Получение "больших" изображений и комментариев
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

  // Модальное окно
  function handleModal() {
    if (typeof data.comments !== 'undefined') {
      for (let key of Object.keys(data.comments)) {
        var d = new Date(data.comments[key].date);
        let myDate = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear()
        return (
          <Modal show={show} onHide={handleClose} className='modal' centered size="lg">
            <Modal.Body>
              <img
                src={data.url}
                alt={'image' + data.id}
                style={{ width: '100%' }}
              />
              <h1>{myDate}</h1>
              <h1>{data.comments[key].text}</h1>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal>
        )
      }
    }
    if (!!data.comments) {
      return (
        <Modal.Dialog>
          <Modal.Body>
            <img
              src={data.url}
              alt={'image' + data.id}
              style={{ width: '100%' }}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      )
    }
  }

  // Получение ID и вызов модального окна
  const [show, setShow] = useState(false);
  function GetImageId(id) {
    console.log(id)
    handleShow()
  }

  return (
    <div className="App">

        {handleModal()}

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

    </div>
  );

}

export default GetItem