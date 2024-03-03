import React from "react";
import { CircleDot, Circle } from "lucide-react";
import { IMAGES } from "./ImageSlider";

export default function Dots({ imageIndex, setImageIndex }) {
  return (
    <div className="">
      <h2 className="text-3xl text-white flex justify-center">
        {imageIndex + 1}
      </h2>
      {IMAGES.map((_, index) => (
        <button
          key={index}
          onClick={() => setImageIndex(index)}
          className="text-white mt-6 ml-2 "
        >
          {index === imageIndex ? <CircleDot /> : <Circle></Circle>}
        </button>
      ))}
    </div>
  );
}
