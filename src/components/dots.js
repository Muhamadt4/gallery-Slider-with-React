import React from "react";
import { CircleDot, Circle } from "lucide-react";
import { IMAGES } from "./ImageSlider";

export default function Dots({ imageIndex, setImageIndex }) {
  return (
    <div>
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
