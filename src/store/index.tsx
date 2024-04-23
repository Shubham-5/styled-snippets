import { create } from "zustand";

interface SnippetState {
  html: string;
  css: string;
  setHtml: (html: string) => void;
  setCss: (css: string) => void;
}

export const useSnippetStore = create<SnippetState>()((set) => ({
  html: "",
  css: "",
  setHtml: (html: string) => set((state) => ({ ...state, html: html })),
  setCss: (css: string) => set((state) => ({ ...state, css: css })),
}));
