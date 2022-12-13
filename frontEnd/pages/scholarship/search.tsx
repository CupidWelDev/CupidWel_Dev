import type { NextPage } from "next";
import SEO from "@components/SEO";
import { useEffect, useState } from "react";
import RecentlyView from "@components/RecentlyVIew";
import { deleteDB, getDB } from "@libs/IndexedDB";

interface ISearch {
  id: number;
  search: string;
  create: number;
}

const Search: NextPage = () => {
  const [recentlySearch, setRecentlySearch] = useState<ISearch[]>();

  useEffect(() => {
    getDB(setRecentlySearch, "search");
  }, []);

  //todo : 최근 검색어 삭제하기
  const deleteSearch = (str: any) => {
    setRecentlySearch(
      recentlySearch?.filter(
        (data: any) => data.id !== Number(str.target.value)
      )
    );
    deleteDB(str.target.value, "search");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 h-100vh flex flex-col  ">
        <SEO title="탐색" />
        {/*  검색창*/}
        <section className="flex justify-start items-center gap-2">
          {recentlySearch
            ?.slice(-3)
            .reverse()
            .map((str: ISearch, idx: number) => (
              <div
                key={idx}
                className="border-2 border-amber-400 rounded-xl bg-amber-400 flex px-1 gap-2"
              >
                <p>{str.search}</p>
                <button onClick={(str) => deleteSearch(str)} value={str.id}>
                  x
                </button>
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
