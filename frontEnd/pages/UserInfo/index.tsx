import type { NextPage } from "next";
import SEO from "../../components/SEO";

const UserInfo: NextPage = () => {
  return (
    <div className="bg-red-100">
      <SEO title="내 정보" />
      <p className="text-2xl">내정보</p>
    </div>
  );
};

export default UserInfo;
