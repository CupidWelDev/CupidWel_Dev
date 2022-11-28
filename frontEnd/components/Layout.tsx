import NavBar from "@components/NavBar";
import Header from "@components/Header";
import PushNotificationLayout from "@components/PushNotificationLayout";

export default function Layout({ children }: any): JSX.Element {
  return (
    // <PushNotificationLayout>
    <div className="flex justify-center">
      <div className="w-full sm:w-[400px] min-h-screen bg-white">
        <Header />
        <div className="mt-[70px] mb-[64px]">{children}</div>
        <NavBar />
      </div>
    </div>
    // </PushNotificationLayout>
  );
}
