import React, { useEffect, useState } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpeg";
import Dots from "./dots";
import Images from "./images";

export const IMAGES = [img1, img2, img3, img4, img5, img6];
export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  //next img function
  const nextImage = () => {
    setImageIndex((index) => {
      if (index === IMAGES.length - 1) return 0;
      return index + 1;
    });
  };
  //prev img function
  const prevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return IMAGES.length - 1;
      return index - 1;
    });
  };
  //auto slide function
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((index) => (index === IMAGES.length - 1 ? 0 : index + 1));
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center w-full h-[70%]">
      <Images
        imageIndex={imageIndex}
        prevImage={prevImage}
        nextImage={nextImage}
      />

      <div>
        <Dots imageIndex={imageIndex} setImageIndex={setImageIndex} />
      </div>
    </div>
  );
}
