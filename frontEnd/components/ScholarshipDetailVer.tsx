import Image from "next/image";
import Link from "next/link";

interface IProps {
  img: string;
  foundation: string;
  id: number;
  deadLine?: Date;
  startPeriod?: Date;
  endPeriod?: Date;
}

export default function ScholarshipDetailVer({ ...props }: IProps) {
  const { img, foundation, id } = props;

  return (
    <Link href={`/Scholarship/${id}`}>
      <div>
        <Image src={img} width="140px" height="140px" />
        <p className="text-xs">
          {foundation.length < 10
            ? foundation
            : `${foundation.slice(0, 10)}...`}
        </p>
      </div>
    </Link>
  );
}
