import React, { useState, useEffect } from "react";

const GetItem = () => {
  const [images, setData] = useState([]);

  useEffect(() => {
    fetch("https://boiling-refuge-66454.herokuapp.com/images/")
      .then((res) => res.json())
      .then(
        (images) => {
          setData(images);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const getImage = (id) => {
      // setTempUrl(url)
      // handleShow()
      console.log(id)
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
                  onClick={() => getImage(item.id)}
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