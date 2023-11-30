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

  const [selected, setSelected] = useState(0);
  const [imgAdd, setImgAdd] = useState();

  function handleCheckUnchecked(e, id) {
    let _images = images.map((image) => {
      if (image.id === id) {
        return { ...image, selected: e.target.checked };
      }
      return image;
    });

    setImages(_images);
    setSelected(_images.filter((image) => image.selected).length);
  }

  function itemsToDelete() {
    return images.filter((image) => image.selected);
  }

  function handleDelete() {
    const items = itemsToDelete();

    setImages((images) => images.filter((image) => !items.includes(image)));

    setSelected(0);
  }

  function imgUpload(e) {
    const newImgSrc = URL.createObjectURL(e.target.files[0]);

    setImgAdd(newImgSrc);

    const newImg = { id: 12, imgSrc: newImgSrc, selected: false };

    setImages([...images, newImg]);
    console.log(newImg);
  }

  return (
    <div className="container">
      <div className="heading">
        {selected > 0 ? (
          <h3>
            {" "}
            <i className="fa fa-check-square"></i> {selected} Files Selected
          </h3>
        ) : (
          <h3>Gallery</h3>
        )}
        {selected > 0 ? (
          <button className="btn" onClick={handleDelete}>
            Delete Item
          </button>
        ) : null}
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
              <img className="img" src={image.imgSrc} alt="" style={{ width: "100%" }} />
            </label>
          </div>
        ))}
        <label className="custom-file-input">
          <input type="file" onChange={imgUpload} multiple />
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
