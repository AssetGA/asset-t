import SlideUpImage from "./ui/SlideUpImage";

const images = [
  "/img/img1.jpeg",
  "/img/img2.jpeg",
  "/img/img3.jpeg",
  "/img/img4.jpeg",
];

export default function SlideGallery() {
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      {images.map((src, i) => (
        <SlideUpImage key={i} delay={i * 1.8} />
      ))}
    </div>
  );
}
