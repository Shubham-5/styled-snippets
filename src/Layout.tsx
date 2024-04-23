import { PropsWithChildren } from "react";

import Header from "./components/Header";
import { Drawer, VaulDrawer } from "./components/Drawer";

const Layout = (props: PropsWithChildren) => {
  return (
    <VaulDrawer.Root shouldScaleBackground>
      <Header />
      <div className="px-4 md:px-24">{props.children}</div>
      <Drawer />
    </VaulDrawer.Root>
  );
};

export default Layout;
