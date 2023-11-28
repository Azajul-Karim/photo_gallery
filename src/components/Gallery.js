import React, { useState } from "react";

const Gallery = () => {
  const inputPath = "./images/";

  const [images, setImages] = useState([
    { id: 1, imgSrc: `${inputPath}image-1.webp`, selected: false },
    { id: 2, imgSrc: `${inputPath}image-2.webp`, selected: false },
    { id: 3, imgSrc: `${inputPath}image-3.webp`, selected: false },
    { id: 4, imgSrc: `${inputPath}image-4.webp`, selected: false },
    { id: 5, imgSrc: `${inputPath}image-5.webp`, selected: false },
    { id: 6, imgSrc: `${inputPath}image-6.webp`, selected: false },
    { id: 7, imgSrc: `${inputPath}image-7.webp`, selected: false },
    { id: 8, imgSrc: `${inputPath}image-8.webp`, selected: false },
    { id: 9, imgSrc: `${inputPath}image-9.webp`, selected: false },
    { id: 10, imgSrc: `${inputPath}image-10.jpeg`, selected: false },
    { id: 11, imgSrc: `${inputPath}image-11.jpeg`, selected: false },
  ]);

  function handleCheckUnchecked(e, id) {
    e.preventDefault();

    setImages((images) =>
      images.map((image) => {
        if (image.id === id) {
          return { ...image, selected: !image.selected };
        }
        return image;
      })
    );
  }

  function itemsToDelete() {
    return images.filter((image) => image.selected);
  }

  function handleDelete() {
    
    const items = itemsToDelete();
  
    setImages((images) =>
      images.filter((image) => !items.includes(image))
    );
  
  }
  return (
    <div className="container">
      <div className="heading">
        <h3>Gallery</h3>
        <button className="btn" onClick={handleDelete}>
          Delete Item
        </button>
      </div>

      <div className="gallery">
        {images.map((image) => (
          <div className="image-box" key={image.id}>
            <label className="image-container">
              <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => {
                  handleCheckUnchecked(e, image.id);
                }}
              />
              <img src={image.imgSrc} alt="" style={{ width: "100%" }} />
            </label>
          </div>
        ))}
        <label className="custom-file-input">
          <input type="file" />
          <div className="custom-file-container">
            <div className="icon">
              <i className="fa-solid fa-image"></i>
            </div>
            <div className="text">
              <strong>Add Images</strong>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Gallery;
