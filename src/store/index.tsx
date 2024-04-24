import { create } from "zustand";

type SnippetState = {
  htmlSnippet: string;
  cssSnippet: string;
  snippet: "html" | "css" | null;
  setSnippet: (snippet: "html" | "css") => void;
  setHtmlSnippet: (html: string) => void;
  setCssSnippet: (css: string) => void;
};

export const useSnippetStore = create<SnippetState>()((set) => ({
  htmlSnippet: "",
  cssSnippet: "",
  snippet: null,
  setSnippet: (snippet: "html" | "css") =>
    set((state) => ({ ...state, snippet })),
  setHtmlSnippet: (htmlSnippet: string) =>
    set((state) => ({ ...state, htmlSnippet })),
  setCssSnippet: (cssSnippet: string) =>
    set((state) => ({ ...state, cssSnippet })),
}));
