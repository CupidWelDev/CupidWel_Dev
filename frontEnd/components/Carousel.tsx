import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { ReactNode } from "react";

interface PropType {
  slides: ReactNode[];
}
//Todo 배너광고, 가이드, 장학금에 사용가능하도록 수정
export default function Carousel({ slides }: PropType): JSX.Element {
  const options: EmblaOptionsType = {
    loop: true,
    align: "start",
  };

  const [viewportRef, _] = useEmblaCarousel(options);

  return (
    <div className="w-full overflow-hidden" ref={viewportRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div className="mr-3 mt-2" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
