import React, { useState, useEffect } from "react"

import { Modal } from 'react-bootstrap'

import { Container, Row, Col } from 'react-bootstrap'

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
    fetch("https://boiling-refuge-66454.herokuapp.com/images/238")
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
              <Container>
                <Row className="imageRow">
                  <Col md={7}>
                    <img
                      src={data.url}
                      alt={'image' + data.id}
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col md={5} className="commentsCol">
                    <p>{myDate}</p>
                    <p>{data.comments[key].text}</p>
                  </Col>
                </Row>
                <Row className="postRow">
                  <Col md={{ span: 7, offset: 0 }}>
                    <input className="inputs"></input>
                    <input className="inputs"></input>
                    <button className="inputs">Comment submit</button>
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
          </Modal>
        )
      }
    }
    if (!!data.comments) {
      return (
        <Modal show={show} onHide={handleClose} className='modal' centered size="lg">
        <Modal.Body>
          <Container>
            <Row className="imageRow">
              <Col md={12}>
                <img
                  src={data.url}
                  alt={'image' + data.id}
                  style={{ width: '100%' }}
                />
              </Col>
            </Row>
            <Row className="postRow">
              <Col md={{ span: 12, offset: 0 }}>
                <input className="inputs"></input>
                <input className="inputs"></input>
                <button className="inputs">Comment submit</button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
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