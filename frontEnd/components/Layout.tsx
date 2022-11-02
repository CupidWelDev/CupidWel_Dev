import NavBar from "@components/NavBar";
import Header from "@components/Header";
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
