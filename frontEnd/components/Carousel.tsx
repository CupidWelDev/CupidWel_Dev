import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";

interface PropType {
  slides: ReactNode[];
}

export default function Carousel({ slides }: PropType) {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    axis: "x",
  });

  return (
    <div className="w-full overflow-hidden" ref={viewportRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div className="mr-10 mt-2" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
