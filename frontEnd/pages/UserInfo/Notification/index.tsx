import type { NextPage } from "next";
import SEO from "../../../components/SEO";

const Notification: NextPage = () => {
  return (
    <div className="bg-red-100">
      <SEO title="알림" />
      <p className="text-2xl">알림</p>
    </div>
  );
};

export default Notification;
