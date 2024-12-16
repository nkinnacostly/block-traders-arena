import { create } from "zustand";
import { persist } from "zustand/middleware";

// Define your store
export const useUserStore = create(
  persist(
    (set) => ({
      loggedInUserDetails: {},
      setLoggedInUserDetails: (loggedInUserDetails) =>
        set(() => ({
          loggedInUserDetails: loggedInUserDetails,
        })),
    }),
    {
      name: "user-data", // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
    {
      // ...
      skipHydration: true,
    }
  )
);

// For dialog
export const useDialog = create((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: {},
  setData: (data) => set({ data: { data } }),
}));

export const useStatsStore = create(
  persist(
    (set) => ({
      statistics: {},
      setStatistics: (statistics) =>
        set(() => ({
          statistics: statistics,
        })),
    }),
    {
      name: "user-stats", // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
    {
      // ...
      skipHydration: true,
    }
  )
);
export const useVideoStore = create((set) => ({
  watchedVideos: 0,
  incrementWatchedVideos: () =>
    set((state) => ({
      watchedVideos: state.watchedVideos + 1,
    })),
  resetWatchedVideos: () =>
    set(() => ({
      watchedVideos: 0,
    })),
}));
