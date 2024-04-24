import { useState } from "react";
import { Drawer as VaulDrawer } from "vaul";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useSnippetStore } from "../store";

export function Drawer() {
  const [copied, setCopied] = useState(false);
  const { htmlSnippet, cssSnippet, snippet } = useSnippetStore();

  function copyToClipboard() {
    const text = snippet === "html" ? htmlSnippet : cssSnippet;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  }

  return (
    <VaulDrawer.Portal>
      <VaulDrawer.Overlay className="fixed inset-0 bg-black/40" />
      <VaulDrawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
        <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
          <div className="max-w-md mx-auto">
            <VaulDrawer.Title className="font-medium mb-4 uppercase">
              {snippet}
            </VaulDrawer.Title>
            <p className="text-zinc-600 mb-2"></p>
            <SyntaxHighlighter language={snippet ?? "html"} style={dark}>
              {snippet === "html" ? htmlSnippet : cssSnippet}
            </SyntaxHighlighter>
          </div>
        </div>
        <div
          className="p-4 bg-zinc-100 text-sm border-t text-center border-zinc-200 mt-auto hover:cursor-pointer hover:bg-zinc-50 active:scale-95"
          onClick={copyToClipboard}
        >
          {copied ? "Copied 🤞" : "Click here to copy"}
        </div>
      </VaulDrawer.Content>
    </VaulDrawer.Portal>
  );
}

export { VaulDrawer };
