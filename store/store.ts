import create from "zustand";

import detectLocale from "@/helpers/localeDetector";

type AppState = {
  currentLocale: string;
  setCurrentLocale: (locale: string) => void;
};

const useStore = create<AppState>((set) => ({
  currentLocale: detectLocale(),
  setCurrentLocale: (locale: string) => set(() => ({ currentLocale: locale })),
}));

export default useStore;
