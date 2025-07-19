import FloatingColumn from "./FloatingColumn";

const FloatingImagesMultiColumn = () => {
  const images = [
    "/almale/1.JPEG",
    "/most.JPG",
    "/homes/aktau.jpeg",
    "/baiterek.JPG",
    "/park.JPG",
    "/noch.JPG",
    "/homes/kostanay.jpeg",
    "/homes/almaty.jpeg",
    "/fontan.JPG",
  ];

  function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8 justify-center items-center">
      <div className="hidden xl:block">
        <FloatingColumn images={images} direction="up" delay={1} />
      </div>
      <FloatingColumn
        images={shuffleArray(images)}
        direction="down"
        delay={2}
      />
      <FloatingColumn
        images={shuffleArray(images)}
        direction="up"
        delay={0.1}
      />
      <div className="hidden sm:block">
        <FloatingColumn images={images} direction="down" delay={3} />
      </div>
      <div className="hidden md:block">
        <FloatingColumn
          images={shuffleArray(images)}
          direction="up"
          delay={1}
        />
      </div>
    </div>
  );
};

export default FloatingImagesMultiColumn;
