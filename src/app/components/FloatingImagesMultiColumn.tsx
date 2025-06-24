import FloatingColumn from "./FloatingColumn";

const FloatingImagesMultiColumn = () => {
  const images = [
    "/almale/1.JPEG",
    "/img1.jpeg",
    "/homes/aktau.jpeg",
    "/gravitation/logo.png",
    // "/img4.jpeg",
    // "/img5.jpeg",
    // "/img6.jpeg",
    "/homes/kostanay.jpeg",
    "/homes/almaty.jpeg",
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8 justify-center items-center">
      <div className="hidden xl:block">
        <FloatingColumn images={images} direction="up" />
      </div>
      <FloatingColumn images={images} direction="down" delay={2} />
      <FloatingColumn images={images} direction="up" />
      <div className="hidden sm:block">
        <FloatingColumn images={images} direction="down" delay={2} />
      </div>
      <div className="hidden md:block">
        <FloatingColumn images={images} direction="up" />
      </div>
    </div>
  );
};

export default FloatingImagesMultiColumn;
