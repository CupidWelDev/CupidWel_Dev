import Image from "next/image";

interface IProps {
  URL?: string;
  img: string;
  text?: string;
}

export default function CupidWelGuide({ URL, img }: IProps) {
  return (
    <div className="w-[335px] h-[70px]">
      <Image src={img} width="335px" height="70px" className="rounded-xl" />
    </div>
  );
}
