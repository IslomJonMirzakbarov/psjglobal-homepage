import create from "zustand";

import detectLocale from "@/helpers/localeDetector";

type Locale = "en" | "ko";

type AppState = {
  isSidebarOpen: boolean;
  handleSidebar: (state: boolean) => void;
  currentLocale: Locale;
  setCurrentLocale: (locale: Locale) => void;
};

const useStore = create<AppState>((set) => ({
  currentLocale: detectLocale(),
  setCurrentLocale: (locale) => set(() => ({ currentLocale: locale })),
  isSidebarOpen: false,
  handleSidebar: (state: boolean) => set(() => ({ isSidebarOpen: state })),
}));

export default useStore;
