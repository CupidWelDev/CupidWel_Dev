import NavBar from "./NavBar";

export default function Layout({ children }: any): JSX.Element {
  return (
    <div>
      <div>{children}</div>
      <NavBar />
    </div>
  );
}
