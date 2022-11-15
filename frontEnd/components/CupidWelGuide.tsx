import Image from "next/image";
import Link from "next/link";

interface IProps {
  id: number;
  img: string;
}

export default function CupidWelGuide({ id, img }: IProps) {
  return (
    <div className="w-[335px] h-[70px]">
      <Link href={`/guide/${id}`}>
        <a>
          <Image src={img} width="335px" height="70px" className="rounded-xl" />
        </a>
      </Link>
    </div>
  );
}
