import type { NextPage } from "next";
import SEO from "../../components/SEO";

const SearchScholarship: NextPage = () => {
  return (
    <div className="bg-white w-[375px] h-100vh flex flex-col items-center">
      <SEO title="탐색" />
      <p className="text-2xl">탐색 클릭시</p>
      <div className="w-[200px] h-[300px] overflow-y-scroll">hidden test</div>
    </div>
  );
};

export default SearchScholarship;
