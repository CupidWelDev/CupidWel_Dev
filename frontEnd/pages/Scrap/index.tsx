import type { NextPage } from "next";
import SEO from "../../components/SEO";

const Scrap: NextPage = () => {
  return (
    <div className="bg-red-100">
      <SEO title="스크랩" />
      <p className="text-2xl">스크랩</p>
    </div>
  );
};

export default Scrap;
