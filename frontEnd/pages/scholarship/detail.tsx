import type { NextPage } from "next";
import SEO from "@components/SEO";
import { useEffect, useState } from "react";
import { deleteDB, getDB } from "@libs/IndexedDB";
import RecentlyView from "@components/RecentlyVIew";

const Search: NextPage = () => {
  const [recentlySearch, setRecentlySearch] = useState();

  useEffect(() => {
    getDB(setRecentlySearch, "search");
  }, []);

  const deleteSearch = (e: any) => {
    console.log(recentlySearch, e);
  };
  console.log("삭제할것임", recentlySearch);

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 h-100vh flex flex-col  ">
        <SEO title="탐색" />
        {/*  검색창*/}
        <section className="flex justify-start items-center gap-2">
          {recentlySearch
            ?.slice(-3)
            .reverse()
            .map((str, idx) => (
              <div
                key={idx}
                className="border-2 border-amber-400 rounded-xl bg-amber-400 flex px-1 gap-2"
              >
                <p>{str.search}</p>
                <button onClick={deleteSearch}>x</button>
              </div>
            ))}
        </section>
        <section>
          <div className="flex flex-row justify-between">
            <p className="mt-4 text-xl font-semibold">최근 본 장학금</p>
          </div>
          <RecentlyView />
        </section>
      </div>
    </div>
  );
};

export default Search;
