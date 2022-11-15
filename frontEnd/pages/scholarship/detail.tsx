import type { NextPage } from "next";
import SEO from "@components/SEO";
import { useEffect, useState } from "react";
import { getDB } from "@libs/IndexedDB";

//TODO : fix 안깨질라면 searhbar는 header로 옮기고 getDB를 불러와서 띄울 것
const Search: NextPage = () => {
  const [recentlySearch, setRecentlySearch] = useState();

  useEffect(() => {
    getDB(setRecentlySearch, "search");
  }, []);

  return (
    <div className="w-full h-100vh flex flex-col pl-4 pr-4">
      <SEO title="탐색" />
      {/*  검색창*/}
      <div className="flex justify-start gap-2">
        <div> 최근검색어 : </div>
        {recentlySearch
          ?.slice(-3)
          .reverse()
          .map((str, idx) => (
            <div
              key={idx}
              className="border-2 border-amber-400 rounded-xl bg-amber-400"
            >
              <p className="mx-2">{str.search}</p>
            </div>
          ))}
      </div>
      <p className="text-2xl">탐색 클릭시</p>
    </div>
  );
};

export default Search;
