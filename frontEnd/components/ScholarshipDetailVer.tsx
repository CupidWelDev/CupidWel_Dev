import Image from "next/image";
import Link from "next/link";
import { cutText } from "@libs/utils";
import ScholarshipBgImg from "@components/ScholarshipBgImg";

interface IProps {
  img: string;
  foundation: string;
  id: string;
  title: string;
  deadLine?: string;
  startPeriod?: string;
  endPeriod?: string;
}

interface IScholarShipDetailVer {
  id: string;
  institution: string;
  product: string;
  deadLine?: string;
  startPeriod?: string;
  endPeriod?: string;
}

export default function ScholarshipDetailVer({
  ...props
}: IScholarShipDetailVer) {
  // const { img, foundation, id, title, startPeriod, endPeriod } = props;
  const { id, institution, product } = props;

  return (
    <Link href={`/scholarship/${id}`}>
      <div className="w-[140px] h-full">
        {/*<Image src={img} width="140px" height="140px" />*/}
        <ScholarshipBgImg text={product} type={"small"} />
        <p className="text-[12px] opacity-50">{cutText(institution, 10)}</p>
        <p className="text-[15px]">{cutText(product, 8)}</p>
        {/*<p className="text-[15px]">{`${startPeriod} ~ ${endPeriod}`}</p>*/}
      </div>
    </Link>
  );
}
