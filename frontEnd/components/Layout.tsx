import NavBar from "./NavBar";
import Header from "./Header";

export default function Layout({ children }: any): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="w-[375px]">
        <Header />
        <div>{children}</div>
        <NavBar />
      </div>
    </div>
  );
}
