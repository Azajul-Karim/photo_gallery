import React from "react";
import image1 from "./images/image-1.webp";
import image10 from "./images/image-10.jpeg";
import image11 from "./images/image-11.jpeg";
import image2 from "./images/image-2.webp";
import image3 from "./images/image-3.webp";
import image4 from "./images/image-4.webp";
import image5 from "./images/image-5.webp";
import image6 from "./images/image-6.webp";
import image7 from "./images/image-7.webp";
import image8 from "./images/image-8.webp";
import image9 from "./images/image-9.webp";

const Gallery = () => {
  const images = [
    { id: 1, imgSrc: image1 },
    { id: 2, imgSrc: image2 },
    { id: 3, imgSrc: image3 },
    { id: 4, imgSrc: image4 },
    { id: 5, imgSrc: image5 },
    { id: 6, imgSrc: image6 },
    { id: 7, imgSrc: image7 },
    { id: 8, imgSrc: image8 },
    { id: 9, imgSrc: image9 },
    { id: 10, imgSrc: image10 },
    { id: 11, imgSrc: image11 },
  ];

  return (
    <div className="container">
      <div className="heading">
        <h3>Gallery</h3>
        <button className="btn">Delete Item</button>
      </div>

      <div className="gallery">
        {images.map((image) => (
          <div className="image-box" key={image.id}>
            <label className="image-container">
            <input type="checkbox" className="checkbox" />
              <img src={image.imgSrc} alt="" style={{ width: "100%" }} />
            </label>
          </div>
        ))}

        <label className="custom-file-input">
          <input type="file" />
          <div className="custom-file-container">
            <div className="icon">
              <i class="fa-solid fa-image"></i>
            </div>
            <div class="text">
              <strong>Add Images</strong>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Gallery;
