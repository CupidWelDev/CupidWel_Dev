import Image from "next/image";
import Link from "next/link";
import { cutText } from "@libs/utils";

interface IScholarShipDetailHoriz {
  id: string;
  img: string;
  foundation: string;
  title: string;
  deadLine?: string;
  startPeriod?: string;
  endPeriod?: string;
}

export default function ScholarshipDetailHoriz({
  ...props
}: IScholarShipDetailHoriz) {
  const { img, foundation, id, title, startPeriod, endPeriod } = props;

  return (
    <div className={"w-full cursor-pointer mt-2"}>
      <Link href={`/scholarship/${id}`}>
        <div className="flex">
          <div className={"mr-3"}>
            <Image
              src={img}
              width="80px"
              height="80px"
            />
          </div>
          <div>
            <p className="text-sm opacity-50">{cutText(foundation, 40)}</p>
            <p className="text-base">{cutText(title, 40)}</p>
            <p className="text-sm mt-1.5">
              <span className="bg-[#297FF1] bg-opacity-10 rounded-sm text-[#297FF1] text-xs py-0.5 px-1 mr-1">
                D-23
              </span>
              {`${startPeriod} ~ ${endPeriod}`}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
