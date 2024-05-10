import { useState } from "react";
import { Drawer as VaulDrawer } from "vaul";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
      <VaulDrawer.Content className="bg-zinc-100 z-50 flex flex-col rounded-t-[10px] h-screen w-[400px] md:w-fit md:min-w-[400px] mt-24 fixed bottom-0 right-0">
        <div className="flex bg-white flex-1 rounded-l-[10px] h-full">
          <div className="my-auto w-1.5 h-12 flex-shrink-0 rounded-full bg-zinc-300 ml-2" />

          <div className="p-4 overflow-y-auto w-full">
            <div className="max-w-md mx-auto">
              <div className="flex justify-between items-center mb-4">
                <VaulDrawer.Title className="font-medium uppercase">
                  {snippet}
                </VaulDrawer.Title>
                <div
                  className="p-2 rounded-md text-base hover:cursor-pointer transition-transform font-medium hover:bg-zinc-50 active:scale-95"
                  onClick={copyToClipboard}
                >
                  {copied ? "Copied 🤞" : "Copy 👋"}
                </div>
              </div>

              <SyntaxHighlighter
                language={snippet ?? "html"}
                style={github}
                className="rounded-md text-md select-text"
              >
                {snippet === "html" ? htmlSnippet : cssSnippet}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </VaulDrawer.Content>
    </VaulDrawer.Portal>
  );
}

export { VaulDrawer };
