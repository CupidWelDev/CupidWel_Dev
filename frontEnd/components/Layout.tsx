import NavBar from "./NavBar";

export default function Layout({ children }: any): JSX.Element {
  return (
    <div className="flex justify-center">
      <div className="w-[375px]">
        <div>{children}</div>
        <NavBar />
      </div>
    </div>
  );
}
