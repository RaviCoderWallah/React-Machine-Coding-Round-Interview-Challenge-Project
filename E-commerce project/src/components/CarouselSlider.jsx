import { useState } from "react";
import Image1 from "../assets/images/image-1.png";
import Image2 from "../assets/images/image-2.png";
import Image3 from "../assets/images/image-3.png";
import Image4 from "../assets/images/image-4.png";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const CarouselSlider = () => {
  const carouselImagesData = [
    {
      id: 1,
      url: Image1,
      title: "The New Standard of Power.",
      description: "Discover the latest MacBook Pro. Now 20% faster, with all-day battery life and stunning liquid retina display.",
      primaryButton: "Shop Now",
      secondaryButton: "Learn more"
    },
    {
      id: 2,
      url: Image2,
      title: "Effortless Style: The Linen Collection.",
      description: "Meet your new favorite essentials. Explore soft, breathable fabrics designed for comfort and modern aesthetics.",
      primaryButton: "Explore Men's",
      secondaryButton: "Explore Women's"
    },
    {
      id: 3,
      url: Image3,
      title: "Elevate Your Everyday Rituals.",
      description: "Find balance. Shop our curated collection of organic skincare, restorative home fragrances, and minimalist decor.",
      primaryButton: "Shop Wellness",
      secondaryButton: "Shop Home Decor"
    },
    {
      id: 4,
      url: Image4,
      title: "Flash Sale: Up to 50% Off Top Brands!",
      description: "Limited quantities on electronics, apparel, and home essentials. Act fast—these deals won't last the weekend.",
      primaryButton: "Shop the Sale",
      secondaryButton: "New Arrivals"
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const {id, title, description, primaryButton, secondaryButton, url} = carouselImagesData[currentSlideIndex];

  //For previous Slide
  const handlePreviousSlide = () => {
    if(currentSlideIndex > 0){
      setCurrentSlideIndex((prev) => prev - 1);
    }else{
      setCurrentSlideIndex(carouselImagesData.length - 1);
    }
  }

  //For next slide 
  const handleNextSlide = () => {
    if(carouselImagesData.length - 1 > currentSlideIndex){
      setCurrentSlideIndex((prev) => prev + 1);
    }else{
      setCurrentSlideIndex(0);
    }
  }

  return (
    <div className="max-w-6xl mx-auto bg-white my-8 p-2 grid grid-cols-2" data-currentSlide={id}>
      <div className="flex flex-col justify-evenly gap-4">
        <h1 className="text-5xl text-balance font-medium text-gray-700">{title}</h1>
        <p className="text-lg text-balance text-gray-800">{description}</p>
        <div className="flex gap-4">
          <button className="bg-blue-700 text-white px-4 py-2 outline-2 outline-blue-700 rounded-sm cursor-pointer">{primaryButton}</button>
          <button className="outline-2 px-4 py-2 rounded-sm cursor-pointer">{secondaryButton}</button>
        </div>
      </div>
      <div className="flex relative">
        <button
          onClick={handlePreviousSlide}
          className="absolute top-[50%] -left-5 bg-blue-600 pr-2 pl-1 py-2 rounded-md text-white text-2xl"
        >
          <GrCaretPrevious />
        </button>
        <img className="max-w-full" src={url} alt={title} />
        <button
          onClick={handleNextSlide}
          className="absolute top-[50%] -right-5 bg-blue-600 text-white text-2xl pl-2 pr-1 py-2 rounded-md"
        >
          <GrCaretNext />
        </button>
      </div>
    </div>
  )
}

export default CarouselSlider;