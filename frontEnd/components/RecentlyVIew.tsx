import { NextPage } from "next";
import ScholarshipDetailVer from "@components/ScholarshipDetailVer";
import { scholarships } from "../dummyData/schoarship";
import Carousel from "@components/Carousel";
import { useEffect, useState } from "react";
import { getDB, openDB } from "@libs/IndexedDB";
import { IScholarship } from "@ITypes/schoalship";

const RecentlyView: NextPage = () => {
  const [view, setView] = useState<IScholarship[]>([]);
  useEffect(() => {
    getDB(setView);
  }, []);

  return (
    <>
      <div className="text-center mb-5">최근 본 장학금</div>
      <section className="w-11/12 mb-8 h-[240px]">
        <p className="text-xl font-semibold mb-4">추천 장학금</p>
        <div className="w-full h-[200px]">
          {view.length !== 0 && (
            <Carousel
              slides={view.map((scholarship, idx) => (
                <ScholarshipDetailVer key={idx} {...scholarship} />
              ))}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default RecentlyView;
