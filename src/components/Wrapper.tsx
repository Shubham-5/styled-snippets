import { ReactNode } from "react";
import { MdHtml, MdCss } from "react-icons/md";

import { VaulDrawer } from "./Drawer";
import { useSnippetStore } from "../store";

type Props = {
  html: string;
  css: string;
  children: ReactNode;
};

const Wrapper = (props: Props) => {
  const { setHtmlSnippet, setCssSnippet, setSnippet } = useSnippetStore();

  function onSnippetClick(snippet: "html" | "css") {
    if (snippet === "html") {
      setSnippet("html");
      setHtmlSnippet(props.html);
    } else {
      setSnippet("css");
      setCssSnippet(props.css);
    }
  }
  return (
    <div className="border shadow-sm rounded-lg w-full md:w-fit">
      <div className="flex items-center justify-between border-b text-sm pe-2">
        <p className="bg-slate-500 rounded-sm p-2 font-medium text-white">
          Preview
        </p>
        <VaulDrawer.Trigger onClick={() => onSnippetClick("html")}>
          <p className="p-2 cursor-pointer">
            <MdHtml size={26} />
          </p>
        </VaulDrawer.Trigger>
        <VaulDrawer.Trigger onClick={() => onSnippetClick("css")}>
          <p className="p-2 cursor-pointer">
            <MdCss size={26} />
          </p>
        </VaulDrawer.Trigger>
      </div>

      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Wrapper;
