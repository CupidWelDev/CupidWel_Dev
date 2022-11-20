import type { NextPage } from "next";
import SEO from "@components/SEO";

const fallback: NextPage = () => {
  return (
    <div>
      <SEO title="네트워크 오류" />
      <h1>네트워크를 확인해 주세요</h1>
    </div>
  );
};

export default fallback;
