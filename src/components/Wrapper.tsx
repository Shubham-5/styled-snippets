import { PropsWithChildren } from "react";
import { VaulDrawer } from "./Drawer";

const Wrapper = (props: PropsWithChildren) => {
  return (
    <div className="border shadow-sm rounded-lg w-full md:w-fit">
      <div className="flex items-center justify-between border-b text-sm pe-2">
        <p className="bg-slate-500 rounded-sm p-2 font-medium text-white">
          Preview
        </p>
        <VaulDrawer.Trigger>
          <p className="p-2 cursor-pointer">HTML</p>
        </VaulDrawer.Trigger>
        <VaulDrawer.Trigger>
          <p className="p-2 cursor-pointer">CSS</p>
        </VaulDrawer.Trigger>
      </div>

      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Wrapper;
