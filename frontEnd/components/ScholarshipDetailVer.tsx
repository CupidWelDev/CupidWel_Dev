import Image from "next/image";
import Link from "next/link";

interface IProps {
  img: string;
  foundation: string;
  id: number;
  title: string;
  deadLine?: string;
  startPeriod?: string;
  endPeriod?: string;
}

export default function ScholarshipDetailVer({ ...props }: IProps) {
  const { img, foundation, id, title, startPeriod, endPeriod } = props;

  return (
    <Link href={`/scholarship/${id}`}>
      <div className="w-[140px] h-full">
        <Image src={img} width="140px" height="140px" />
        <p className="text-[12px] opacity-50">
          {foundation.length < 10
            ? foundation
            : `${foundation.slice(0, 10)}...`}
        </p>
        <p className="text-[15px]">
          {title.length < 10 ? title : `${title.slice(0, 10)}...`}
        </p>
        <p className="text-[15px]">{`${startPeriod} ~ ${endPeriod}`}</p>
      </div>
    </Link>
  );
}
