import { PropsWithChildren } from "react";
import Header from "./components/Header";

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="px-4 md:px-24">{props.children}</div>
    </>
  );
};

export default Layout;
