import { ReactNode } from "react";
import { VaulDrawer } from "./Drawer";
import { useSnippetStore } from "../store";

type Props = {
  html: string;
  css: string;
  children: ReactNode;
};

const Wrapper = (props: Props) => {
  const { setHtml, setCss } = useSnippetStore();
  return (
    <div className="border shadow-sm rounded-lg w-full md:w-fit">
      <div className="flex items-center justify-between border-b text-sm pe-2">
        <p className="bg-slate-500 rounded-sm p-2 font-medium text-white">
          Preview
        </p>
        <VaulDrawer.Trigger onClick={() => setHtml(props.html)}>
          <p className="p-2 cursor-pointer">HTML</p>
        </VaulDrawer.Trigger>
        <VaulDrawer.Trigger onClick={() => setCss(props.css)}>
          <p className="p-2 cursor-pointer">CSS</p>
        </VaulDrawer.Trigger>
      </div>

      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Wrapper;
