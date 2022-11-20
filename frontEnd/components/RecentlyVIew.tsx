import { NextPage } from "next";
import ScholarshipDetailVer from "@components/ScholarshipDetailVer";
import { scholarships } from "../dummyData/schoarship";
import Carousel from "@components/Carousel";
import { useEffect, useState } from "react";
import { getDB } from "@libs/IndexedDB";
import { IScholarship } from "@ITypes/schoalship";

const RecentlyView: NextPage = () => {
  const [view, setView] = useState<IScholarship[]>([]);
  useEffect(() => {
    getDB(setView, "scholarship");
  }, []);

  return (
    <section className="w-full mb-8 h-[240px]">
      <div className="w-full h-[200px]">
        {view.length !== 0 && (
          <Carousel
            slides={view.map((scholarship, idx) => (
              // @ts-ignore
              <ScholarshipDetailVer
                institution={""}
                product={""}
                key={idx}
                {...scholarship}
              />
            ))}
          />
        )}
      </div>
    </section>
  );
};

export default RecentlyView;
