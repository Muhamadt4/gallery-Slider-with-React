import { IMAGES } from "./ImageSlider";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function Images({ imageIndex, prevImage, nextImage }) {

    return (
    <div className="flex overflow-x-hidden relative  ">
      {IMAGES.map((url) => (
        <img
          className="w-[100%] transition-all duration-700 ease object-cover object-center flex-grow-0 flex-shrink-0"
          src={url}
          key={url}
          style={{ translate: `${-100 * imageIndex}%` }}
          alt=""
        />
      ))}
      <button
        className=" transition-all duration-300 text-white absolute left-0 w-10 h-full flex justify-center items-center bg-slate-800 bg-opacity-45 hover:bg-opacity-80"
        onClick={prevImage}
      >
        <ArrowBigLeft />
      </button>
      <button
        className="transition-all duration-300 text-white absolute right-0 w-10 h-full flex justify-center items-center bg-slate-800  bg-opacity-45 hover:bg-opacity-80"
        onClick={nextImage}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
