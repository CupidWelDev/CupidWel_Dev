import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="w-[375px] min-h-screen bg-white">
        <Header />
        <div className="mb-[64px]">{children}</div>
        <NavBar />
      </div>
    </div>
  );
}
