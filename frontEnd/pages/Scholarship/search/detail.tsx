import type { NextPage } from "next";
import SEO from "../../../components/SEO";

const Search: NextPage = () => {
  return (
    <div className="w-[375px] h-100vh flex flex-col items-center">
      <SEO title="탐색" />
      <p className="text-2xl">탐색 클릭시</p>
    </div>
  );
};

export default Search;
