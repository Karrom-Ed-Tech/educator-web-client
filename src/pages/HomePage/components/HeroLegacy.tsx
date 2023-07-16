import { useEffect, useState } from "react";

function Hero() {
  const [currentImage, setCurrentImage] = useState<string>("/images/home1.jpg");
  const [imageIndex, setImageIndex] = useState<number>(1);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);

      setTimeout(() => {
        const nextIndex = imageIndex === 3 ? 1 : imageIndex + 1;
        setCurrentImage(getImageByIndex(nextIndex));
        setImageIndex(nextIndex);

        setIsFadingOut(false);
      }, 250);
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [imageIndex]);

  const getImageByIndex = (index: number): string => {
    switch (index) {
      case 1:
        return "/images/home1.jpg";
      case 2:
        return "/images/home2.jpg";
      case 3:
        return "/iamges/home3.jpg";
      default:
        return "/images/home1.jpg";
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center mx-20 py-20 mobile:mx-10">
      <div className="flex flex-col mt:2 items-stretch justify-start mt-10 lg:w-1/2">
        <div className="text-xs font-bold text-secondary mb-3">
          UNLOCKING EDUCATOR EXCELLENCE
        </div>
        <div className="text-3xl font-bold mb-4 text-secondary">
          Share, Inspire, and Empower with Your Expertise and Experience!
        </div>
        <div className="text-gray-500 mb-3">
          Unleash your expertise and inspire learners worldwide. Share and
          showcase your content across diverse skills, fostering collaboration
          and innovation in education.
        </div>
        <div>
          <button className="py-2 px-3 bg-primary rounded-md text-white">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <img
          src={currentImage}
          className={`w-custom-spacing-image h-96 object-cover border-8 mobileSmall:h-72 transition-opacity duration-500 ${
            isFadingOut ? "opacity-0" : "opacity-100"
          }`}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
