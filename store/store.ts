import create from "zustand";

import detectLocale from "@/helpers/localeDetector";

type AppState = {
  isSidebarOpen: boolean;
  handleSidebar: (state: boolean) => void;
  currentLocale: string;
  setCurrentLocale: (locale: string) => void;
};

const useStore = create<AppState>((set) => ({
  currentLocale: detectLocale(),
  setCurrentLocale: (locale: string) => set(() => ({ currentLocale: locale })),
  isSidebarOpen: false,
  handleSidebar: (state: boolean) => set(() => ({ isSidebarOpen: state })),
}));

export default useStore;
