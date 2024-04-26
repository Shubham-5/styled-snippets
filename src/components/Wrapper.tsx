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
    <div className="border shadow-sm rounded-lg w-full md:w-fit h-fit">
      <div className="flex justify-end gap-4 p-4 border-b shadow-sm">
        <VaulDrawer.Trigger onClick={() => onSnippetClick("html")}>
          <p className="cursor-pointer hover:text-gray-500">
            <MdHtml size={26} className="mx-auto" />
          </p>
        </VaulDrawer.Trigger>
        <VaulDrawer.Trigger onClick={() => onSnippetClick("css")}>
          <p className="cursor-pointer  hover:text-gray-500">
            <MdCss size={26} className="mx-auto" />
          </p>
        </VaulDrawer.Trigger>
      </div>
      <div className="p-4">{props.children}</div>
    </div>
  );
};

export default Wrapper;
